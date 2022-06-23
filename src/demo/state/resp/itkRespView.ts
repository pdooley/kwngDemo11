/**********************************************************************
 *
 * app/state/activity/dwActivityView.ts
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
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStView }       from "@kwNgClass/kwNgStView";
// @formatter:off


@Injectable()
export class itkRespView extends kwNgStView
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkRespView::constructor() called.");
	}
}
