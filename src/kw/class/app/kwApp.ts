/**********************************************************************
 *
 * kw/class/app/kwApp.ts
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
import {kw }		         from "@kw/kw";

import {kwAppEnum }		 from "./kwAppEnum";
import {kwAppSrvc }		 from "./kwAppSrvc";
//@formatter:on

export abstract class kwApp
{

	constructor( private nType: kwAppEnum )
	{
		//console.log("kwApp::constructor() is called.");
	}

	public abstract canTransition(prev: kwApp): boolean;

	init(): boolean
	{
		//console.log("kwApp::init() is called.");

		if (!kwAppSrvc.in(this.nType))
		{
			console.error("kwApp::init() nType is invalid.");
			return false;
		}
		//console.info("kwApp::init() nType is ", this.nType);

		return true;

	}

	getType(): kwAppEnum
	{
		return this.nType;
	}

	isBootstrap(): boolean
	{
		return (this.nType === kwAppEnum.bootstrap);
	}

	isConnect(): boolean
	{
		return (this.nType === kwAppEnum.connect);
	}

	isCreate(): boolean
	{
		return (this.nType === kwAppEnum.create);
	}

	isInit(): boolean
	{
		return (this.nType === kwAppEnum.init);
	}

	isLoggedIn(): boolean
	{
		return (this.nType === kwAppEnum.loggedin);
	}

	isLoggedOut(): boolean
	{
		return (this.nType === kwAppEnum.loggedout);
	}

	isLogout(): boolean
	{
		return (this.nType === kwAppEnum.logout);
	}

	isLogin(): boolean
	{
		return (this.nType === kwAppEnum.login);
	}

	isReset(): boolean
	{
		return (this.nType === kwAppEnum.reset);
	}

	isVerify(): boolean
	{
		return (this.nType === kwAppEnum.verify);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwAppEnum);
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwApp)
	}
}
