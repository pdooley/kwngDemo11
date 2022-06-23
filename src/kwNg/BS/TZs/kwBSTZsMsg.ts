/**********************************************************************
 *
 * kwNg/BS/TZs/kwBSTZsMsg.ts
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

import {kwBSTZsApi }       from "./kwBSTZsApi";

//@formatter:off


@Injectable()
export class kwBSTZsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSTZsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
