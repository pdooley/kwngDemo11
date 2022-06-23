/**********************************************************************
 *
 * kw/class/api/kwApi.ts
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
import {kw }		                from "@kw/kw";
import {kwActs }			        from "@kwClass/acts/kwActs";
import {kwActsFcty }               from "@kwClass/acts/kwActsFcty";
import {kwApiType }                from "./kwApiType";
import {kwMode }                   from "@kwClass/mode/kwMode";
import {kwModeFcty }               from "@kwClass/mode/kwModeFcty";
//@formatter:on


export class kwApi
{
	protected sTag: string = this.constructor.name;

	acts: kwActs;
	mode: kwMode;

	constructor(private info: kwApiType)
	{
		//console.log(this.sTag, "::constructor() called");
	}

	init(): boolean
	{
		//console.log("this.sTag, "::init() is called.");

		if (kw.isNull(this.info))
		{
			console.error("kwApi::init() info is invalid.");
			return false;
		}
		//console.info("kwApi::init() info is ", this.info);

		if (!this.retrieveActs())
		{
			console.error("kwApi::init() error creating acts.");
			return false;
		}

		if (!this.retrieveMode())
		{
			console.error("kwApi::init() error creating mode.");
			return false;
		}

		return true;
	}

	getActs(): kwActs
	{
		return this.acts;
	}

	getMode(): kwMode
	{
		return this.mode;
	}

	retrieveActs(): boolean
	{
		//console.log(this.sTag, "::retrieveActs() is called.");

		if (kw.isNull(this.info))
		{
			console.error(this.sTag, "::retrieveActs() info is invalid.");
			return false;
		}
		//console.info(this.sTag, "::retrieveActs() info is ", this.info);

		const acts: kwActs = kwActsFcty.create(this.info);
		if (!kwActs.is(acts))
		{
			console.error(this.sTag, "::retrieveActs() error creating acts.");
			return false;
		}
		//console.info(this.sTag, "::retrieveActs() acts is []", acts, "]");
		this.acts = acts;

		return true;
	}

	retrieveMode(): boolean
	{
		//console.log("kwApi::retrieveMode() is called.");

		if (kw.isNull(this.info))
		{
			console.error("kwApi::retrieveMode() info is invalid.");
			return false;
		}
		//console.info("kwApi::retrieveMode() info is ", this.info);

		const mode: kwMode = kwModeFcty.create(this.info);
		if (!kwMode.is(mode))
		{
			console.error("kwApi::retrieveMode() error creating mode.");
			return false;
		}
		//console.info("kwApi::retrieveMode() mode is ", mode);
		this.mode = mode;

		return true;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwApi)
	}

}

