/**********************************************************************
 *
 * kwNg/state/signup/kwSignupApi.ts
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
import { kwNgStApi }        from "@kwNgClass/kwNgStApi";
//@formatter:off

@Injectable()
export class kwSignupApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwSignupApi::constructor() called.");
	}
}
