/**********************************************************************
 *
 * kw/class/app/kwAppInit.ts
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


export class kwAppInit extends kwApp
{
	constructor()
	{
		super(kwAppEnum.init);
		//console.log('kwAppInit::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppInit::canTransition() called');
		return true;
	}

}

