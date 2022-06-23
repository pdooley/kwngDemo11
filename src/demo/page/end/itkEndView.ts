/**********************************************************************
 *
 * app/comp/bad/itkBadView.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Injectable }			    from '@angular/core';

//import { kwViewType }				from '../../kwDlg/class/kwViewType';
import { kwNgStDataList }             from "../../../kwNg/state/kwNgStDataList";
import { kwBSTraceVal } from "../../../kwNg/BS/trace/kwBSTraceVal";
// @formatter:on


@Injectable()
export class itkBadView extends kwNgStDataList
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkBadView::constructor() called.");
	}
}
