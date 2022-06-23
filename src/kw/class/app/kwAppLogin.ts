/**********************************************************************
 *
 * kw/class/app/kwAppLogin.ts
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


export class kwAppLogin extends kwApp
{
	constructor()
	{
		super(kwAppEnum.login);
		//console.log('kwAppLogin::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppLogin::canTransition() called');

		if (prev.isLoggedOut()
		|| 	prev.isInit()	    )
		{
			return true;
		}
		console.error("kwAppLogin::canTransition() invalid state transition.");
		return false;
	}

}

