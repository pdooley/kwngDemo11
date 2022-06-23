/**********************************************************************
 *
 * kw/class/app/kwAppLoggedOut.ts
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


export class kwAppLoggedOut extends kwApp
{
	constructor()
	{
		super(kwAppEnum.loggedout);
		//console.log('kwAppLoggedOut::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppLoggedOut::canTransition() called');

		if (prev.isLogout())
		{
			return true;
		}

		console.error("kwAppLoggedOut::canTransition() invalid state transition.");
		return false;
	}
}

