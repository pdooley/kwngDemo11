/**********************************************************************
 *
 * kwNg/state/inits/kwInitsMsg.ts
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
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }        from "@kwNgClass/kwNgStMsg";

import { kwInitsApi }       from "./kwInitsApi";

//@formatter:off


@Injectable()
export class kwInitsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwInitsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
