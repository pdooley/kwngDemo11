/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiMsg.ts
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
import {Injectable }	    from '@angular/core';

import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStMsg }         from "@kwNgClass/kwNgStMsg";

import {kwBSApiApi }        from "./kwBSApiApi";

//@formatter:off


@Injectable()
export class kwBSApiMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSApiApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
