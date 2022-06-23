/**********************************************************************
 *
 * kw/class/token/kwTokenAuth0.ts
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


export class kwTokenAuth0 extends kwToken
{
	constructor(tokens: kwTokenMap)
	{
		super(kwTokenEnum.auth0, tokens);
		//console.log("kwTokenAuth0::constructor() is called.");
	}

}
