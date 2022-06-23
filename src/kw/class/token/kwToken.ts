
/**********************************************************************
 *
 * kw/class/token/kwToken.ts
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
import {kwTokenEnum }    		    from "./kwTokenEnum";
import {kwTokenSrvc }    		    from "./kwTokenSrvc";
import {kwTokenMap }               from "./kwTokenMap";
//@formatter:on

export class kwToken
{

	sTokenFull: string;

	constructor(    private nType: kwTokenEnum,
	                protected tokens: kwTokenMap  )
	{
		//console.log("kwToken::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwToken::init() called.");

		if (!kwTokenSrvc.in(this.nType))
		{
			console.error("kwToken::init() nType is invalid.");
			return false;
		}
		//console.info("kwToken::init() nType is ", this.nType);

		if (kw.isNull(this.tokens))
		{
			console.error("kwToken::init() tokens is invalid.");
			return false;
		}
		//console.info("kwToken::init() tokens is ", this.tokens);

		return this.createToken();
	}

	createToken(): boolean
	{
		//console.log("kwToken::createToken() called.");

		if (!kwTokenSrvc.in(this.nType))
		{
			console.error("kwToken::createToken() nType is invalid.");
			return false;
		}
		//console.info("kwToken::createToken() nType is ", this.nType);

		if (kw.isNull(this.tokens))
		{
			console.error("kwToken::createToken() tokens is invalid.");
			return false;
		}

		const sType: string = this.toString();
		if (!kw.isString(sType))
		{
			console.error("kwToken::createToken() sType is invalid.");
			return false;
		}
		//console.info("kwToken::createToken() sType is ", sType);

		const token: object = this.tokens.getByCode(sType);
		if (kw.isNull(token))
		{
			console.error("kwToken::createToken() token is invalid.");
			return false;
		}
		//console.info("kwToken::createToken() token is ", token);

		const sToken: string = token["sVal"];
		if (!kw.isString(sToken))
		{
			console.error("kwToken::createToken() sToken is invalid.");
			return false;
		}
		//console.info("kwToken::createToken() sToken is ", sToken);

		const sTokenFull: string = sType + " "  + sToken;
		//console.info("kwToken::createToken() sTokenFull is ", sTokenFull);

		this.sTokenFull = sTokenFull;
		return true;
	}

	getToken(): string
	{
		return this.sTokenFull;
	}

	isAuth0(): boolean
	{
		return (this.nType === kwTokenEnum.auth0);
	}

	isOrg(): boolean
	{
		return (this.nType === kwTokenEnum.org);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwTokenEnum);
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwToken);
	}

}
