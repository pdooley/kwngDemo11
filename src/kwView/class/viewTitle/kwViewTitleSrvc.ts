/**********************************************************************
 *
 * kwView/class/viewTitle/kwViewTitleSrvc.ts
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

import { kwViewTitleType }			from "./kwViewTitleType";
//@formatter:on


export class kwViewTitleSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwViewTitleType)
	}

	static in(nVal: number): boolean
	{
		return false;
	}

	static toEnum(sVal: string): number
	{
		return -1;
	}
}

