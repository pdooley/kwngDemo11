/**********************************************************************
 *
 * kwNg/state/signout/kwSignoutList.ts
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


const sTAG_ID: string       = "id";
const sTAG_TYPE: string     = "signout";


@Injectable()
export class kwSignoutList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID,
			sTAG_TYPE   );

		//console.log("kwSignoutList::constructor() called.");
	}

//@formatter:on

}
