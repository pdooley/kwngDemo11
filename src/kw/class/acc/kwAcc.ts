/**********************************************************************
 *
 * kw/class/acc/kwAcc.ts
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
import {kw }		            from "@kw/kw";
import {kwAccEnum }		        from "./kwAccEnum";
import {kwAccSrvc }		        from "./kwAccSrvc";
//@formatter:on


export class kwAcc
{

	constructor(private nType: kwAccEnum)
	{
		//console.log("kwAcc::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwAcc::init() is called.");

		if (!kwAccSrvc.in(this.nType))
		{
			console.error("kwAct::init() nType is invalid.");
			return false;
		}
		//console.info("kwAcc::init() nType is ", this.nType);

		return true;
	}

	isBoth(): boolean
	{
		return (this.nType === kwAccEnum.both);
	}

	isClient(): boolean
	{
		return (this.nType === kwAccEnum.client);
	}

	isStaff(): boolean
	{
		return (this.nType === kwAccEnum.staff);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwAccEnum);
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwAcc)
	}

}
