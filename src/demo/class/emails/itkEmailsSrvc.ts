/**********************************************************************
 *
 * app/class/email/itkEmailsSrvc.ts
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
import { itkEmail }		        from "../email/itkEmail";
import { itkEmailType }			from "../email/itkEmailType";
import { itkEmailSrvc }         from "../email/itkEmailSrvc";

import { itkEmailsType }        from "./itkEmailsType";
// @formatter:on


export class itkEmailsSrvc
{
	static isType(obj: object): boolean
	{
		return kw.is(obj, itkEmailsType)
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

