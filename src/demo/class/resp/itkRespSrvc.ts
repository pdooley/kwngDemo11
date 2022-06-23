/**********************************************************************
 *
 * app/class/resp/itkRespSrvc.ts
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

import { itkRespType }			from "./itkRespType";
// @formatter:on


export class itkRespSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkRespType)
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

