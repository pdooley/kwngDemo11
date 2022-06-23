"use strict";
/**********************************************************************
 *
 * kw/class/url/kwUrl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// @formatter:off
var kw_1 = require("../../kw");
var kwActSrvc_1 = require("../act/kwActSrvc");
var kwParams_1 = require("../params/kwParams");
// @formatter:on
var kwUrl = (function () {
    function kwUrl(type, params) {
        this.type = type;
        this.params = params;
        console.log("kwUrl::constructor() is called.");
    }
    kwUrl.prototype.init = function () {
        //console.log("kwUrl::init() called.");
        if (!(kwActSrvc_1.kwActSrvc.isType(this.type))) {
            console.error("kwUrl::init() action is invalid");
            return false;
        }
        if (!kwParams_1.kwParams.is(this.params)) {
            console.error("kwUrl::init() params is invalid");
            return false;
        }
        this.retrieveDomain(this.type);
        this.retrieveTemplate(this.type);
        this.createPath(this.params);
        this.create();
    };
    ;
    kwUrl.prototype.getUrl = function () {
        return this.sUrl;
    };
    kwUrl.prototype.create = function () {
        //console.log("kwUrl::create() called.");
        if (!kw_1.kw.isString(this.sPath)) {
            console.error("kwUrl::create() sPath is invalid");
            return;
        }
        //console.info("kwUrl::create() sPath is ", this.sPath);
        var sUrl = undefined;
        if (!kw_1.kw.isString(this.sDomain)) {
            //console.info("kwUrl::create() sDomain is empty");
            sUrl = this.sPath;
        }
        else {
            sUrl = this.sDomain + "/" + this.sPath;
        }
        //console.info("kwUrl::create() sUrl is ", sUrl);
        this.setUrl(sUrl);
    };
    kwUrl.prototype.createPath = function (params) {
        //console.log("kwUrl::createPath() called.");
        if (!kw_1.kw.isArray(params)) {
            console.error("kwUrl::createPath() params is invalid");
            return;
        }
        //console.info("kwUrl::createPath() params is ", params);
        if (!kw_1.kw.isString(this.sTemplate)) {
            console.error("kwUrl::createPath() sTemplate is invalid");
            return;
        }
        //console.info("kwUrl::createPath() sTemplate is ", this.sTemplate);
        var nLength = params.length;
        if (length === 0) {
            //console.info("kwUrl::createPath() params is empty");
        }
        var sPath = this.sTemplate;
        for (var i = 0; i < nLength; i++) {
            var param = params[i];
            //console.info("kwUrl::createPath() param is ", param);
            sPath = sPath.replace('[' + i + ']', param);
        }
        //console.info("kwUrl::createPath() sPath is ", sPath);
        this.setPath(sPath);
    };
    kwUrl.prototype.retrieveDomain = function (action) {
        //console.log("kwUrl::retrieveDomain() called.");
        if (!kw_1.kw.isNull(action)) {
            console.error("kwUrl::retrieveDomain() action is not valid.");
            return;
        }
        var sService = action.getService();
        if (!kw_1.kw.isString(sService)) {
            //console.info("kwUrl::retrieveDomain() service is empty.");
            return;
        }
        var sDomain = cnstHosts[sService];
        if (!kw_1.kw.isString(sDomain)) {
            console.error("kwUrl::retrieveService() sDomain is not valid.");
            return;
        }
        this.setDomain(sDomain);
    };
    ;
    kwUrl.prototype.retrieveTemplate = function (action) {
        //console.log("kwUrl::Template() called.");
        var sTemplate = action.getTemplate();
        if (!kw_1.kw.isString(sTemplate)) {
            console.error("kwUrl::init() sTemplate is invalid");
            return;
        }
        this.setTemplate(sTemplate);
    };
    kwUrl.prototype.toString = function () {
        return this.constructor.name;
    };
    ;
    kwUrl.is = function (obj) {
        return kw_1.kw.is(obj, kwUrl);
    };
    return kwUrl;
}());
exports.kwUrl = kwUrl;
