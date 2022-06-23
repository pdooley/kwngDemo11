/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {Injectable }	        from '@angular/core';

import {kwBSTraceVal }         from "@kwNgBS/trace/kwBSTraceVal";
import {kwBSLangsApi }         from "./kwBSLangsApi";
import {kwNgStMsg }            from "@kwNgClass/kwNgStMsg";
//@formatter:off


@Injectable()
export class kwBSLangsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSLangsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
