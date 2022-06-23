/**********************************************************************
 *
 * kwNg/BS/TZ/kwBSTZMsg.ts
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
import {Injectable }       from '@angular/core';

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStMsg }        from "@kwNgClass/kwNgStMsg";

import {kwBSTZApi }        from "./kwBSTZApi";

//@formatter:off


@Injectable()
export class kwBSTZMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwBSTZApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sClass, "::constructor() called.");
	}
}
