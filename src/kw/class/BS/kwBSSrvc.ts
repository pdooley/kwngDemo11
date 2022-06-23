/**********************************************************************
 *
 * kw/class/BS/kwBSSrvc.ts
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
import {kw }		        from "@kw/kw";

import {kwtBS }			    from "./kwtBS";
//@formatter:on


export class kwBSSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, kwtBS)
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

