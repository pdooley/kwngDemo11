/**********************************************************************
 *
 * kwNg/BS/TZ/kwBSTZList.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

import {Injectable }        from '@angular/core';

import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataList }    from "@kwNgClass/kwNgStDataList";
import {kwTZType }          from "@kwClass/TZ/kwTZType";


const sTAG_ID: string       = "id";


//@formatter:on

@Injectable()
export class kwBSTZList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID   );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:off

	public get(): kwTZType[]
	{
		return <kwTZType[]>super.get();
	}
}
