/**********************************************************************
 *
 * kwNg/state/api/kwApiMdl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMdl }                from "@kwNgClass/kwNgStMdl";
//@formatter:off

@Injectable()
export class kwApiMdl extends kwNgStMdl
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log(this.sTag,"::constructor() called.");
	}
}
