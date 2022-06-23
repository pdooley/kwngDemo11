/**********************************************************************
 *
 * kw/class/app/kwAppLogout.ts
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


export class kwAppLogout extends kwApp
{
	constructor()
	{
		super(kwAppEnum.logout);
		//console.log('kwAppLogout::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppLogout::canTransition() called');

		if (!prev.isLoggedIn()
		&& 	!prev.isInit()	    )
		{
			console.error("kwAppLogout::canTransition() invalid state transition.");
			return false;
		}
		return true;
	}

}

