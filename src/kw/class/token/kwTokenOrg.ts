/**********************************************************************
 *
 * kw/class/token/kwTokenOrg.ts
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
import {kwToken }		            from "./kwToken";
import {kwTokenEnum }		        from "./kwTokenEnum";
import {kwTokenMap }               from "./kwTokenMap";
//@formatter:on


export class kwTokenOrg extends kwToken
{
	constructor(tokens: kwTokenMap)
	{
		super(kwTokenEnum.org, tokens);
		//console.log("kwTokenOrg::constructor() is called.");
	}

}
