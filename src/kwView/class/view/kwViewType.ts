/**********************************************************************
 *
 * kwDlg/class/view/kwViewType.ts
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
import { kwViewBtnType }     from "../viewBtn/kwViewBtnType";
import { kwViewContType }    from "../viewCont/kwViewContType";
import { kwViewTitleType }   from "../viewTitle/kwViewTitleType";
//@formatter:on


export class kwViewType
{
	title: kwViewTitleType;
	content?: kwViewContType;
	btns?: kwViewBtnType[];
	sImage?: string;
	bHasClose?: boolean;
	sUrl?: string;
}
