/**********************************************************************
 *
 * kw/class/BSApi/kwBSApi.ts
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
import {kwApiType }                from "@kwClass/api/kwApiType";
import {kwBS }                     from "@kwClass/BS/kwBS";
//@formatter:on


export class kwBSApi extends kwApi
{
	constructor(
		private BS: kwBS,
		type: kwApiType )
	{
		super(type)
		//console.log("kwBSApi::constructor() called");
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBSApi)
	}

}

