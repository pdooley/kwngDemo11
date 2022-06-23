/**********************************************************************
 *
 * app/state/resp/itkRespApi.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:on
import { Injectable }	    from '@angular/core';

import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
import { kwNgStApi }        from "../../../kwNg/state/kwNgStApi";
// @formatter:off


@Injectable()
export class itkRespApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkRespApi::constructor() called.");
	}
}
