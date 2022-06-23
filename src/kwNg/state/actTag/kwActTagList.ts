/**********************************************************************
 *
 * kwNg/state/actTag/kwActTagList.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kwNgStDataList }           from "@kwNgClass/kwNgStDataList";
import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";


const sTAG_TYPE: string = "actTag";


@Injectable()
export class kwActTagList extends kwNgStDataList
//@formatter:on
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace, sTAG_TYPE);

		//console.log(this.sTag,"::constructor() called.");
	}
}
