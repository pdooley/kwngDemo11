/**********************************************************************
 *
 * app/class/crit/itkCrit.ts
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

import { itkCritSrvc }                 from "./itkCritSrvc";
import { itkCritType }                 from "./itkCritType";
// @formatter:on


export class itkCrit
{
	sCrit: string;
	sEmail: string;
	sPhone: string;

	constructor(private type: itkCritType)
	{
		//console.log("itkCrit::constructor() called");
	};

	init(): boolean
	{
		//console.log("itkCrit::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("itkCrit::init() type is invalid.");
			return false;
		}
		//console.info("itkCrit::init() type is ", this.type);

		let sCrit: string = this.type.sCrit;
		if(!kw.isString(sCrit))
		{
			console.error("itkCrit::init() sCrit is invalid.");
			return false;
		}
		//console.info("itkCrit::init() sCrit is ", sCrit);
		this.sCrit = sCrit;

		let sEmail: string = this.type.sEmail;
		if(!kw.isString(sEmail))
		{
			console.error("itkEmail::init() sEmail is invalid.");
			return false;
		}
		//console.info("itkEmail::init() sEmail is ", sEmail);
		this.sEmail = sEmail;

		let sPhone: string = this.type.sPhone;
		if(!kw.isString(sPhone))
		{
			console.error("itkPhone::init() sPhone is invalid.");
			return false;
		}
		//console.info("itkPhone::init() sPhone is ", sPhone);
		this.sPhone = sPhone;

		return true;
	}

	getCrit(): string
	{
		return this.sCrit;
	};

	getEmail(): string
	{
		return this.sEmail;
	};

	getPhone(): string
	{
		return this.sPhone;
	};

	static is(obj: object): boolean
	{
		return kw.is(obj, itkCrit)
	}

}

