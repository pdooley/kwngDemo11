/**********************************************************************
 *
 * kwNg/state/redirect/kwRedirectApi.ts
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
export class kwRedirectApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwRedirectApi::constructor() called.");
	}
}
