/**********************************************************************
 *
 * kw/class/BSStat/kwBSStat.ts
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

import {kwBSStatEnum }		 from "./kwBSStatEnum";
import {kwBSStatSrvc }		 from "./kwBSStatSrvc";
//@formatter:on

export abstract class kwBSStat
{

	constructor( private nType: kwBSStatEnum )
	{
		//console.log("kwBSStat::constructor() is called.");
	}

	public abstract canTransition(prev: kwBSStat): boolean;

	init(): boolean
	{
		//console.log("kwBSStat::init() is called.");

		if (!kwBSStatSrvc.in(this.nType))
		{
			console.error("kwBSStat::init() nType is invalid.");
			return false;
		}
		//console.info("kwBSStat::init() nType is ", this.nType);

		return true;

	}

	isInit(): boolean
	{
		return (this.nType === kwBSStatEnum.init);
	}

	isBase(): boolean
	{
		return (this.nType === kwBSStatEnum.base);
	}

	isComplete(): boolean
	{
		return (this.nType === kwBSStatEnum.complete);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwBSStatEnum);
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBSStat)
	}
}
