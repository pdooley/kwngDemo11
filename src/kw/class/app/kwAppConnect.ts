/**********************************************************************
 *
 * kw/class/app/kwAppConnect.ts
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


export class kwAppConnect extends kwApp
{
	constructor()
	{
		super(kwAppEnum.connect);
		//console.log('kwAppConnect::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppConnect::canTransition() called');
		return false;
	}
}

