/**********************************************************************
 *
 * kw/class/acts/kwActsFcty.ts
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
import {kw }		           from "@kw/kw";
import {kwApiType }            from "@kwClass/api/kwApiType";

import {kwActs }               from "./kwActs";
import {kwActsType }           from "./kwActsType";
//@formatter:on


const sTAG: string = "actions";


export class kwActsFcty
{

	static create(info: kwApiType): kwActs
	{
		//console.log("kwActsFcty::create() is called.");

		if (kw.isNull(info))
		{
			console.error("kwActsFcty::create() info is invalid.");
			return;
		}
		//console.info("kwActsFcty::create() info is ", info);

		const type: kwActsType = info[sTAG];
		if (kw.isNull(type))
		{
			console.error("kwActsFcty::create() type is invalid.");
			return;
		}
		//console.info("kwActsFcty::create() type is ", type);

		const acts: kwActs = new kwActs(type);
		if (!acts.init())
		{
			console.error("kwActsFcty::create() error creating acts.");
			return;
		}
		//console.info("kwActsFcty::create() acts is ", acts);

		return acts;
	}

}

