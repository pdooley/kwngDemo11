/**********************************************************************
 *
 * kw/class/curr/kwBSCurr.ts
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

import {kwCurrType }		 from "./kwCurrType";
//@formatter:on

export class kwBSCurr
{
	sCode: string;
	sName: string;
	sNamePlural: string;
	sSymbol: string;

	nId: number;
	nDecimalDigits: number;
	nRounding: number;

	constructor(private type: kwCurrType)
	{
		//console.log("kwBSCurr::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwBSCurr::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwBSCurr::init() type is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() type is ", this.type);

		const nId: number = this.type.nId;
		if (!kw.isNumber(nId))
		{
			console.error("kwBSCurr::init() nId is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() nId ", nId);
		this.nId = nId;

		const sCode: string = this.type.sCode;
		if (!kw.isString(sCode))
		{
			console.error("kwBSCurr::init() sCode is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() sCode ", sCode);
		this.sCode = sCode;

		const sName: string = this.type.sName;
		if (!kw.isString(sName))
		{
			console.error("kwBSCurr::init() sName is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() sName ", sName);
		this.sName = sName;

		const sNamePlural: string = this.type.sNamePlural;
		if (!kw.isString(sNamePlural))
		{
			console.error("kwBSCurr::init() sNamePlural is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() sNamePlural ", sNamePlural);
		this.sNamePlural = sNamePlural;

		const sSymbol: string = this.type.sSymbol;
		if (!kw.isString(sSymbol))
		{
			console.error("kwBSCurr::init() sSymbol is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() sSymbol ", sSymbol);
		this.sNamePlural = sSymbol;

		const nDecimalDigits: number = this.type.nDecimalDigits;
		if (!kw.isNumber(nDecimalDigits))
		{
			console.error("kwBSCurr::init() nDecimalDigits is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() nDecimalDigits ", nDecimalDigits);
		this.nDecimalDigits = nDecimalDigits;

		const nRounding: number = this.type.nRounding;
		if (!kw.isNumber(nRounding))
		{
			console.error("kwBSCurr::init() nRounding is invalid.");
			return false;
		}
		//console.info("kwBSCurr::init() nRounding ", nRounding);
		this.nRounding = nRounding;

		return true;
	}

	getId(): number
	{
		return this.type.nId;
	}

	getCode(): string
	{
		return this.type.sCode;
	}

	getName(): string
	{
		return this.type.sName;
	}

	getNamePlural(): string
	{
		return this.type.sNamePlural;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBSCurr)
	}

}
