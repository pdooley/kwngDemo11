/**********************************************************************
 *
 * kwNg/state/err/kwErrVal.ts
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
import { Injectable }	        from '@angular/core';

import { kwErr }                from "@kwClass/err/kwErr";
import { kwNgStDataVal }          from "@kwNgClass/kwNgStDataVal";
import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";
//@formatter:on

@Injectable()
export class kwErrVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwErr
	{
		return <kwErr>super.get();
	}
}
