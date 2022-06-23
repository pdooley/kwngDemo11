/**********************************************************************
 *
 * kwNg/state/host/kwHostKeyVal.ts
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
export class kwHostKeyVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): string
	{
		return <string>super.get();
	}
}
