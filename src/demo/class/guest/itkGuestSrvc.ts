/**********************************************************************
 *
 * app/class/guest/itkGuestSrvc.ts
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
import { itkGuest }		        from "./itkGuest";
import { itkGuestType }         from "./itkGuestType";
// @formatter:on


export class itkGuestSrvc
{

	static isType(obj: object): boolean
	{
		return kw.is(obj, itkGuestType)
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

