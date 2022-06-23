/**********************************************************************
 *
 * kw/class/apis/kwApis.ts
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
import {kwApi }                    from "@kwClass/api/kwApi";

import {kwApisSrvc }               from "./kwApisSrvc";

const sTAG = "apis";
//@formatter:on

export class kwApis
{
	apis: object;

	constructor(private info: object)
	{
		//console.log("kwApis::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwApis::init() called.");

		if (kw.isNull(this.info))
		{
			console.error("kwApis::init() info is invalid.");
			return false;
		}
		//console.info("kwApis::init() info ", this.info);

		const apis: object = this.info[sTAG];
		if (kw.isNull(apis))
		{
			console.error("kwApis::init() apis is invalid.");
			return false;
		}
		//console.info("kwApis::init() apis ", apis);
		this.apis = apis;

		return true;
	}

	getApi(sItem: string): kwApi
	{
		return kwApisSrvc.getItem(sItem, this.apis);
	}

	getApis(): object
	{
		return this.apis;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwApis)
	}
}

