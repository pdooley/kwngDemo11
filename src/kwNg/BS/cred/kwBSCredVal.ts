/**********************************************************************
 *
 * kwNg/BS/cred/kwBSCredVal.ts
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
import {Injectable }	   from '@angular/core';

import {kwCred }           from "@kwClass/cred/kwCred";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
//@formatter:on

@Injectable()
export class kwBSCredVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass,"::constructor() called.");
	}

	public get(): kwCred
	{
		return <kwCred>super.get();
	}
}
