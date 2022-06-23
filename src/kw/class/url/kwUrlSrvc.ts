/**********************************************************************
 *
 * kw/class/srvc/kwUrlSrvc.ts
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

import {kwUrlType }			from "./kwUrlType";
//@formatter:on


export class kwUrlSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwUrlType)
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

