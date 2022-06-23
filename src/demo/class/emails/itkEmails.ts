/**********************************************************************
 *
 * app/class/api/itkEmails.ts
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
import { itkEmail }                     from "../email/itkEmail";
import { itkEmailsFcty }                from "./itkEmailsFcty";
import { itkEmailsType }                from "./itkEmailsType";
// @formatter:on


export class itkEmails
{
	emails: itkEmail[];

	constructor(private type: itkEmailsType)
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

		let emails: itkEmail[] = itkEmailsFcty.create(this.type);
		if (kw.isNull(emails))
		{
			console.error("itkEmail::init() error creating emails.");
			return false;
		}
		this.emails = emails;

		return true;
	}

	getEmails(): itkEmail[]
	{
		return this.emails;
	};

	toString(): string
	{
		return "hello";
	};

	static is(obj: object): boolean
	{
		return kw.is(obj, itkEmails)
	}


}

