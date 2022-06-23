/**********************************************************************
 *
 * kwView/class/viewAct/kwViewBtnSrvc.ts
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

import { kwViewBtnType }			from "./kwViewBtnType";
//@formatter:on


export class kwViewBtnSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwViewBtnType)
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

