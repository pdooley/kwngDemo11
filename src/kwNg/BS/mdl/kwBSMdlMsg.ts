/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlMsg.ts
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
import {kwBSMdlApi }      from "./kwBSMdlApi";
import {kwNgStMsg }        from "@kwNgClass/kwNgStMsg";
//@formatter:off


@Injectable()
export class kwBSMdlMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSMdlApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
