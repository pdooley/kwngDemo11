/**********************************************************************
 *
 * kw/class/app/kwAppReset.ts
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


export class kwAppReset extends kwApp
{
	constructor()
	{
		super(kwAppEnum.reset);
		//console.log('kwAppReset::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppReset::canTransition() called');

		if (prev.isLogin())
		{
			console.error("kwAppLogout::canTransition() invalid state transition.");
			return false;
		}
		return true;
	}

}

