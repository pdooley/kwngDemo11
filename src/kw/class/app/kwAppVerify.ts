/**********************************************************************
 *
 * kw/class/app/kwAppVerify.ts
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


export class kwAppVerify extends kwApp
{
	constructor()
	{
		super(kwAppEnum.verify);
		//console.log('kwAppVerify::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppVerify::canTransition() called');

		if (!prev.isLoggedIn()
		&&  !prev.isLogin()
		&&  !prev.isVerify()		)
		{
			console.error("kwAppVerify::canTransition() invalid state transition.");
			return false;
		}

		return true;
	}

}

