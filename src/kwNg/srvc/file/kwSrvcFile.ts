/**********************************************************************
 *
 * kwNg/srvc/file/kwSrvcFile.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }           from '@angular/core';

import { kw }                   from "@kw/kw";
import { kwErrVal }             from '@kwNgState/err/kwErrVal'


@Injectable()
export class kwSrvcFile
//@formatter:on
{

	constructor(
		private srvcErr: kwErrVal   )
	{
		//console.log("kwSrvcFile::constructor() called.");
	}

	onLoad(reader, deferred, scope)
	{
		return function () {
			scope.$apply(function () {
				deferred.resolve(reader.result);
			});
		}
	}

	onError(reader, deferred, scope)
	{
		return function () {
			scope.$apply(function () {
				deferred.reject(reader.result);
			});
		}
	}

	onProgress(reader, scope)
	{
		return function (event) {
			scope.$broadcast("fileProgress",
				{
					total: event.total,
					loaded: event.loaded
				});
		}
	}

}
