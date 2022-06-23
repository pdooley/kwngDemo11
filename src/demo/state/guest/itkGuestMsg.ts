/**********************************************************************
 *
 * itk/srvc/guest/itkGuestMsg.ts
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
import { kwNgStMsg }        from "../../../kwNg/state/kwNgStMsg";

import { itkGuestApi }      from "./itkGuestApi";
// @formatter:off


@Injectable()
export class itkGuestMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
	    srvcApi: itkGuestApi    )
	{
		super(srvcTrace, srvcApi);
		//console.log("itkGuestMsg::constructor() called.");
	}
}
