/**********************************************************************
 *
 * kwNg/BS/mdls/kwBSMdlsList.ts
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
import {Injectable }	    from '@angular/core';

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataList }    from "@kwNgClass/kwNgStDataList";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSMdlsList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass, "::constructor() called.");
	}

//@formatter:on

}
