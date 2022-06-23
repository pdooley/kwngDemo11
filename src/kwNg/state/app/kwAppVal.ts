/**********************************************************************
 *
 * kwNg/state/app/kwAppVal.ts
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

import { kwApp }            from "@kwClass/app/kwApp";
import { kwAppEnum }        from "@kwClass/app/kwAppEnum";
import { kwAppLoggedOut}    from "@kwClass/app/kwAppLoggedOut";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";

//@formatter:on


const APP = new kwAppLoggedOut();

@Injectable()
export class kwAppVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
		this.data = APP;
	}

	public get(): kwApp
	{
		return <kwApp>super.get();
	}

	public isVerify(): boolean
	{
		return this.get().isVerify();
	}

	public isLogout(): boolean
	{
		return this.get().isLogout();
	}

}
