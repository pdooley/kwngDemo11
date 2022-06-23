/**********************************************************************
 *
 * kwNg/state/accType/kwAccTypeVal.ts
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
import { Injectable }	    from '@angular/core';

import { kwAccEnum }        from "@kwClass/acc/kwAccEnum";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";

//@formatter:on

@Injectable()
export class kwAccTypeVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwAccEnum
	{
		return <kwAccEnum>super.get();
	}
}
