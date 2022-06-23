/**********************************************************************
 *
 * kwNg/state/id/kwIdKeyVal.ts
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

import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
//@formatter:on

@Injectable()
export class kwIdKeyVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): number
	{
		return <number>super.get();
	}
}
