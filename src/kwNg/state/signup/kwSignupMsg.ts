/**********************************************************************
 *
 * kwNg/state/signup/kwSignupMsg.ts
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
import { Injectable }   from '@angular/core';

import { kwBSTraceVal } from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }    from "@kwNgClass/kwNgStMsg";

import { kwSignupApi }     from "./kwSignupApi";

//@formatter:off


@Injectable()
export class kwSignupMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwSignupApi   )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
