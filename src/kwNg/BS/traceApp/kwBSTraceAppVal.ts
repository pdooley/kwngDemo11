/**********************************************************************
 *
 * kwNg/BS/traceApp/kwBSTraceAppVal.ts
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
import {EventEmitter }      from '@angular/core';
import {Injectable }	    from '@angular/core';

import {kw }                from "@kw/kw";
import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }     from "@kwNgClass/kwNgStDataVal";
//@formatter:on


@Injectable()
export class kwBSTraceAppVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
        super(srvcTrace);
		//console.log(this.sClass,"::constructor() called.");
	}

	public traceApp(): boolean
	{
		return this.get();
	}

}
