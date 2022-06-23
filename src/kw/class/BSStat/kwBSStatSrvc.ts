/**********************************************************************
 *
 * kw/class/BSStat/kwBSStatSrvc.ts
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
import {kw }               from "@kw/kw";

import {kwBSStatEnum }		from "./kwBSStatEnum";
//@formatter:on


export class kwBSStatSrvc
{

	static isType(obj: object): boolean
	{
		return false;
	}

	static in(nVal: number): boolean
	{
		return kw.in(nVal, kwBSStatEnum)
	}

	static toEnum(sVal: string): number
	{
		return kw.toEnum(sVal, kwBSStatEnum);
	}
}

