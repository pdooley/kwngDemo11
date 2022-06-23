/**********************************************************************
 *
 * kw/class/ajax/kwAjax.ts
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
import {kwAjaxEnum }               from "./kwAjaxEnum";
import {kwAjaxSrvc }			    from "./kwAjaxSrvc";
import {kwAjaxType }			    from "./kwAjaxType";
//@formatter:on


export class kwAjax
{
	sToken: string;
	sSrvc: string;
	sTmpl: string;

	constructor(
		private nType: kwAjaxEnum,
		private type: kwAjaxType  )
	{
		//console.log("kwAjax::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwAjax::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwAjax::create() type is invalid.");
			return false;
		}
		//console.info("kwAjax::create() type is [", this.type, "]");

		if (!kwAjaxSrvc.in(this.nType))
		{
			console.error("kwAjax::create() nType is invalid.");
			return false;
		}
		//console.info("kwAjax::create() nType is [", this.nType, "]");

		const sSrvc: string = this.type.sService;
		if (!kw.isString(sSrvc))
		{
			//console.info("kwAjax::create() sSrvc is invalid.");
			//return false;
		}
		//console.info("kwAjax::create() sSrvc is [", sSrvc, "]");
		this.sSrvc = sSrvc;

		const sTmpl: string = this.type.sTemplate;
		if (!kw.isString(sTmpl))
		{
			console.error("kwAjax::create() sTmpl is invalid.");
			return false;
		}
		//console.info("kwAjax::create() sTmpl is [", sTmpl, "]");
		this.sTmpl = sTmpl;

		const sToken: string = this.type.sToken;
		if (!kw.isString(sToken))
		{
			//console.info("kwAjax::create() sToken is invalid.");
			//return false;
		}
		//console.info("kwAjax::create() sToken is [", sToken, "]");
		this.sToken = sToken;

		return true;
	}

	getService(): string{
		return this.sSrvc;
	}

	getTemplate(): string{
		return this.sTmpl;
	}

	getToken(): string{
		return this.sToken;
	}

	toString(): string
	{
		return this.constructor.name;
	}
	
	static is(obj: object): boolean
	{
		return kw.is(obj, kwAjax)
	}
}

