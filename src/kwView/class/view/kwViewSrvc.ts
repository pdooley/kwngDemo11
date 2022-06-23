/**********************************************************************
 *
 * kwDlg/class/view/kwViewSrvc.ts
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
import { kw }		            from "@kw/kw";

import { kwViewType }			from "./kwViewType";
//@formatter:on


export class kwViewSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwViewType)
	}

	static in(nVal: number): boolean
	{
		return false
	}

	static toEnum(sVal: string): number
	{
		return -1;
	}
}

