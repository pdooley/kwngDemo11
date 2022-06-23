/**********************************************************************
 *
 * kwNgView/state/signin/kwSigninView.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
//@formatter:off


@Injectable()
export class kwSigninView extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwSigninView::constructor() called.");
	}
}
