/**********************************************************************
 *
 * kwNg/BS/aws/kwBSAWSVal.ts
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
import {Injectable }	    from '@angular/core';

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
//@formatter:on

@Injectable()
export class kwBSAWSVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log(this.sClass, "::constructor() called.");
	}


}
