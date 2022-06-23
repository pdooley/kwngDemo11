/**********************************************************************
 *
 * kw/class/cred/kwCred.ts
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
import {kw }    		            from "@kw/kw";
import {kwCredSrvc }			    from "./kwCredSrvc";
import {kwtCred }			        from "./kwtCred";

const sTAG = "credentials";
//@formatter:on


export class kwCred
{
	sUserName: string;
	sPassword: string;

	constructor(private info: object)
	{
		//console.log("kwCred::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwCred::init() is called.");

		if (kw.isNull(this.info))
		{
			console.error("kwCred::create() info is invalid.");
			return false;
		}
		//console.info("kwCred::create() info is [", this.info, "]");

		const cred: kwtCred = this.info[sTAG];
		if (kw.isNull(cred))
		{
			console.error("kwCred::create() cred is invalid.");
			return false;
		}
		//console.info("kwCred::create() cred is [", cred, "]");

		const sUserName: string = cred.sUserName;
		if (!kw.isString(sUserName))
		{
			//console.info("kwCred::create() sUserName is invalid.");
			return false;
		}
		//console.info("kwCred::create() sUserName is [", sUserName, "]");
		this.sUserName = sUserName;

		const sPassword: string = cred.sPassword;
		if (!kw.isString(sPassword))
		{
			console.error("kwCred::create() sPassword is invalid.");
			return false;
		}
		//console.info("kwCred::create() sPassword is [", sPassword, "]");
		this.sPassword = sPassword;

		return true;
	}

	getUserName(): string{
		return this.sUserName;
	}

	getPassword(): string{
		return this.sPassword;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwCred)
	}

}

