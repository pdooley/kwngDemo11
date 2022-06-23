/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiList.ts
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

import {kwApiType }        from "@kwClass/api/kwApiType";
import {kwNgStDataList }   from "@kwNgClass/kwNgStDataList";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSApiList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID		);

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public get(): kwApiType[]
	{
		return <kwApiType[]>super.get();
	}

}
