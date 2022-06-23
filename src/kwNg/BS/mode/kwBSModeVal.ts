/**********************************************************************
 *
 * kwNg/BS/mode/kwBSModeVal.ts
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

import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";

//@formatter:on


@Injectable()
export class kwBSModeVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sClass,"::constructor() called.");
	}

	public get(): string
	{
		//console.log(this.sClass, "::getString() called.");
		return <string>super.get();
	}
}
