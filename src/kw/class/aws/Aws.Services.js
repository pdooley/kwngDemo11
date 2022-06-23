angular.module("dealwip.aws_services", ['ngFileUpload'])
    .factory("AwsAPI", function ($http, SERVER, $q, $log) {
        "ngInject";

        var onLoad = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.resolve(reader.result);
                });
            }
        }

        var onError = function (reader, deferred, scope) {
            return function () {
                scope.$apply(function () {
                    deferred.reject(reader.result);
                });
            }
        }

        var onProgress = function (reader, scope) {
            return function (event) {
                scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
            }
        }

        var getReader = function (deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        }

        var creds = {
            bucket: 'dealwip',
            access_key: 'AKIAIORA26AL37IARCFA',
            secret_key: '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'
        }
        var bucket = new AWS.S3({params: {Bucket: creds.bucket}});

        AWS.config.update({accessKeyId: creds.access_key, secretAccessKey: creds.secret_key});
        AWS.config.region = 'us-east-1';
        return {
            aws_upload: function (key, content_type, body) {
                var params = {Key: key, ContentType: content_type, Body: body, ServerSideEncryption: 'AES256'}
                var bucket = new AWS.S3({params: {Bucket: creds.bucket}});

                return new Promise(function (resolve, reject) {
                    bucket.putObject(params, function (err, data) {
                            if (err) {
                                // There Was An Error With Your S3 Config
                                // alert(err.message);
                                reject(err);
                            }
                            else {
                                // Success!
                                // alert('Upload Done');
                                resolve(data);
                            }
                        })
                        .on('httpUploadProgress', function (progress) {
                            // Log Progress Information
                            //console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
                        });
                })
            },
            readAsDataURL: function (file, scope) {
                var deferred = $q.defer();

                var reader = getReader(deferred, scope);
                reader.readAsDataURL(file);

                return deferred.promise;
            },
            get_signed_object: function (signed_url) {
                return $http.get(signed_url);
            },
            get_s3_signed_url: function (key) {
                var s3 = new AWS.S3();
                var params = {Bucket: creds.bucket, Key: key}
                return new Promise(function (resolve, reject) {
                    s3.getSignedUrl('getObject', params, function (err, url) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(url);
                        }
                    })

                })
            }


        }
    });
