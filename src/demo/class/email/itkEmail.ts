/**********************************************************************
 *
 * app/class/email/itkEmail.ts
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
import { kw }		                    from "../../../kw/kw";

import { itkEmailSrvc }                 from "./itkEmailSrvc";
import { itkEmailType }                 from "./itkEmailType";
// @formatter:on


export class itkEmail
{
	sEmail: string;

	constructor(private type: itkEmailType)
	{
		//console.log("itkEmail::constructor() called");
	};

	init(): boolean
	{
		//console.log("itkEmail::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("itkEmail::init() type is invalid.");
			return false;
		}
		//console.info("itkEmail::init() type is ", this.type);

		let sEmail: string = this.type.sEmail;
		if(!kw.isString(sEmail))
		{
			console.error("itkEmail::init() sEmail is invalid.");
			return false;
		}
		//console.info("itkEmail::init() sEmail is ", sEmail);
		this.sEmail = sEmail;

		return true;
	}

	getEmail(): string
	{
		return this.sEmail;
	};

	static is(obj: object): boolean
	{
		return kw.is(obj, itkEmail)
	}

}

