/**********************************************************************
 *
 * app/state/TA/itkTAVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { Injectable }	    from '@angular/core';

import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
import { kwNgStDataVal }    from "../../../kwNg/state/kwNgStDataVal";
// @formatter:on

@Injectable()
export class itkTAVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkTaVal::constructor() called.");
	}
}
