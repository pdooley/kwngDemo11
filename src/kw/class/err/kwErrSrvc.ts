/**********************************************************************
 *
 * kw/class/acts/kwActsSrvc.ts
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
import {kw }		                    from "@kw/kw";

import {kwErrType }			        from "./kwErrType";
//@formatter:on


export class kwErrSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwErrType)
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

