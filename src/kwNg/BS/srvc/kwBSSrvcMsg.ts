/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcMsg.ts
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

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStMsg }        from "@kwNgClass/kwNgStMsg";

import {kwBSSrvcApi }      from "./kwBSSrvcApi";
//@formatter:off


@Injectable()
export class kwBSSrvcMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSSrvcApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
