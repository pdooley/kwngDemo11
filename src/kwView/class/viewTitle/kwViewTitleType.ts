/**********************************************************************
 *
 * kwDlg/class/viewTitle/kwViewTitleType.ts
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
import { kwTitleType }      from "../title/kwTitleType";
import { kwLogoType }       from "../logo/kwLogoType";
//@formatter:on


export class kwViewTitleType
{
	title: kwTitleType;
	logo: kwLogoType;
	sImage?: string;
	sUrl?: string;
	bIsXVisible?: boolean;
	nHeight?: number;
}
