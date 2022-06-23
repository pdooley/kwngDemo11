/**********************************************************************
 *
 * app/state/guest/itkGuestList.ts
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

import { kwNgStDataList }   from "../../../kwNg/state/kwNgStDataList";
import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
// @formatter:on

@Injectable()
export class itkGuestList extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkGuestList::constructor() called.");
	}
}
