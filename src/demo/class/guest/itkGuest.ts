/**********************************************************************
 *
 * app/class/guest/itkGuest.ts
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

import { itkGuestType }                from "./itkGuestType";
// @formatter:on


export class itkGuest
{
	sEmail: string;

	constructor(private type: itkGuestType)
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
		if (!kw.isString(sEmail))
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

	toString(): string
	{
		return "hello";
	};

	static is(obj: object): boolean
	{
		return kw.is(obj, itkGuest)
	}
}

