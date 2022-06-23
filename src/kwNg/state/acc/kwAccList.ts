/**********************************************************************
 *
 * kwNg/state/acc/kwAccList.ts
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

const sTAG_ID:          string = "id";

@Injectable()
export class kwAccList extends kwNgStDataList
//@formatter:on
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );
		//console.log("kwAccList::constructor() called.");
	}
}
