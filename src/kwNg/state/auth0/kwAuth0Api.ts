/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0Api.ts
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
export class kwAuth0Api extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwAuth0Api::constructor() called.");
	}
}
