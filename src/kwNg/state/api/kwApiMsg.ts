/**********************************************************************
 *
 * kwNg/state/api/kwApiMsg.ts
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
import { Injectable }	            from '@angular/core';

import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }                from "@kwNgClass/kwNgStMsg";

import { kwApiApi }                 from "./kwApiApi";
//@formatter:off


@Injectable()
export class kwApiMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwApiApi       )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
