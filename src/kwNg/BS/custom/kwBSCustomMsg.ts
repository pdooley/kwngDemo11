/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 kWunst corporation
 *
 **********************************************************************/

//@formatter:on
import {Injectable }	        from '@angular/core';

import {kwBSCustomApi }        from "./kwBSCustomApi";
import {kwBSTraceVal }         from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStMsg }            from "@kwNgClass/kwNgStMsg";
//@formatter:off


@Injectable()
export class kwBSCustomMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSCustomApi       )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
