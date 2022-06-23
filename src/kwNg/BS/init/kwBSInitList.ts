/**********************************************************************
 *
 * kwNg/BS/data/kwBSDataList.ts
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
import { Injectable }       from '@angular/core';

import { kwNgStDataList }   from "@kwNgClass/kwNgStDataList";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSInitList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID		);

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on



}
