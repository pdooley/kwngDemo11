
/**********************************************************************
 *
 * kw/class/TZ/kwBSTZ.ts
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

import {kwTZType }    		    from "./kwTZType";
//@formatter:on

export class kwBSTZ
{

	nId: number;
	sCode: string;
	sName: string;

	constructor( private type: kwTZType )
	{
		//console.log("kwBSTZ::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwBSTZ::init() called.");

		if (kw.isNull(this.type))
		{
			console.error("kwBSTZ::init() type is invalid.");
			return false;
		}
		//console.info("kwBSTZ::init() type is [", this.type, "]");

		const nId = this.type.nId;
		if (!kw.isNumber(nId))
		{
			console.error("kwBSTZ::init() nId is invalid");
			return false;
		}
		//console.info("kwBSTZ::init() nId is [", nId, "]");
		this.nId = nId;

		const sCode = this.type.sCode;
		if (!kw.isString(sCode))
		{
			console.error("kwBSTZ::init() sCode is invalid");
			return false;
		}
		//console.info("kwBSTZ::init() sCode is [", sCode, "]");
		this.sCode = sCode;

		const sName = this.type.sName;
		if (!kw.isString(sName))
		{
			console.error("kwBSTZ::init() sName is invalid");
			return false;
		}
		//console.info("kwBSTZ::init() sName is [", sName, "]");
		this.sName = sName;

		return true;
	}

	getId(): number
	{
		return this.nId;
	}

	getCode(): string
	{
		return this.sCode;
	}
	
	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBSTZ)
	}

}
