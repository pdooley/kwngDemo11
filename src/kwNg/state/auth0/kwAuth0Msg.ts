/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0Msg.ts
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

import { kwAuth0Api }               from "./kwAuth0Api";
//@formatter:off


@Injectable()
export class kwAuth0Msg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwAuth0Api       )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
