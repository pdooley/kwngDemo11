/**********************************************************************
 *
 * kwNg/state/redirect/kwRedirectMsg.ts
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

import { kwRedirectApi }    from "./kwRedirectApi";

//@formatter:off


@Injectable()
export class kwRedirectMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwRedirectApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
