/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrMsg.ts
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
import {Injectable }	   from '@angular/core';

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwBSCurrApi }      from "./kwBSCurrApi";
import {kwNgStMsg }        from "@kwNgClass/kwNgStMsg";
//@formatter:off


@Injectable()
export class kwBSCurrMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSCurrApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
