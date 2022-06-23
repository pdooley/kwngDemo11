/**********************************************************************
 *
 * kw/class/token/kwTokenNull.ts
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


export class kwTokenNull extends kwToken
{
	constructor(tokens: kwTokenMap)
	{
		super(kwTokenEnum.null, tokens);
		//console.log("kwTokenNull::constructor() is called.");
	}

}
