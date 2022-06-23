/**********************************************************************
 *
 * kwNg/state/accCreate/kwAccCreateList.ts
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


const sTAG_TYPE: string = "accCreate";


@Injectable()
export class kwAccCreateList extends kwNgStDataList
//@formatter:on
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace, sTAG_TYPE);

		//console.log(this.sTag,"::constructor() called.");
	}
}
