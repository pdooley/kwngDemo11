/**********************************************************************
 *
 * kwNg/state/actTags/kwActTagsMsg.ts
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

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }              from "@kwNgClass/kwNgStMsg";

import { kwActTagsApi }             from "./kwActTagsApi";
//@formatter:off


@Injectable()
export class kwActTagsMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwActTagsApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
