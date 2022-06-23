/**********************************************************************
 *
 * kw/class/app/kwAppLoggedIn.ts
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
import {kwApp }			    from "./kwApp";
import {kwAppEnum }			from "./kwAppEnum";
//@formatter:on


export class kwAppLoggedIn extends kwApp
{
	constructor()
	{
		super(kwAppEnum.loggedin);
		//console.log('kwAppLoggedIn::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppLoggedIn::canTransition() called');

		if (prev.isVerify())
		{
			return true;
		}

		console.error("kwAppLoggedIn::canTransition() invalid state transition.");
		return false;
	}
}

