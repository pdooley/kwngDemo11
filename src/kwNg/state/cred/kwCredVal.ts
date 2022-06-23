/**********************************************************************
 *
 * kwNg/state/cred/kwCredVal.ts
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

import { kwCred }           from "@kwClass/cred/kwCred";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";

//@formatter:on

@Injectable()
export class kwCredVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwCred
	{
		return <kwCred>super.get();
	}
}
