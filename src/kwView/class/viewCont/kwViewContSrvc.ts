/**********************************************************************
 *
 * kwDlg/class/viewCont/kwViewContSrvc.ts
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
import { kw }		                from "@kw/kw";

import { kwViewContType }			from "./kwViewContType";
//@formatter:on


export class kwViewContSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwViewContType)
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

