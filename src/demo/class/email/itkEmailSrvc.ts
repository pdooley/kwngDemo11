/**********************************************************************
 *
 * app/class/email/itkEmailSrvc.ts
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

import { itkEmailType }			from "./itkEmailType";
// @formatter:on


export class itkEmailSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkEmailType)
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

