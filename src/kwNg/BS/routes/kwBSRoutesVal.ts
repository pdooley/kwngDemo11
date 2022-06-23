/**********************************************************************
 *
 * kwNg/BS/routes/kwBSRoutesVal.ts
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

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import {kwRoutes}          from "@kwClass/routes/kwRoutes";

//@formatter:on


@Injectable()
export class kwBSRoutesVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass,"::constructor() called.");
	}

	public get(): kwRoutes
	{
		//console.log(this.sClass, "::getString() called.");
		return <kwRoutes>super.get();
	}
}
