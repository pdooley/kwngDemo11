/**********************************************************************
 *
 * app/class/crit/itkCritSrvc.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { kw }		            from "../../../kw/kw";

import { itkCritType }			from "./itkCritType";
// @formatter:on


export class itkCritSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkCritType)
	}

	static in(nVal: number): boolean
	{
		return false
	}

	static toEnum(sVal: string): number
	{
		return -1;
	};
}

