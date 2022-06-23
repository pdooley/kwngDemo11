/**********************************************************************
 *
 * itk/srvc/guest/itkGuestApi.ts
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
export class itkGuestApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwGuestApi::constructor() called.");
	}
}
