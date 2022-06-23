/**********************************************************************
 *
 * kw/class/api/kwAppSrvc.ts
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
import {kw }		            from "@kw/kw";

import {kwAppEnum }			from "./kwAppEnum";
//@formatter:on


export class kwAppSrvc
{
	static isType(obj: object): boolean
	{
		return false;
	}

	static in(nVal: number): boolean
	{
		return kw.in(nVal, kwAppEnum)
	}

	static toEnum(sVal: string): number
	{
		return kw.toEnum(sVal, kwAppEnum);
	}
}

