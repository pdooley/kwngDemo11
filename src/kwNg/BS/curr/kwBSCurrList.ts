/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrList.ts
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
import {Injectable }       from '@angular/core';

import {kwCurrType }       from "@kw/class/curr/kwCurrType";
import {kwNgStDataList }   from "@kwNgClass/kwNgStDataList";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSCurrList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public get(): kwCurrType[]
	{
		return <kwCurrType[]>super.get();
	}
}
