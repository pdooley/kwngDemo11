/**********************************************************************
 *
 * kw/class/app/kwAppBootstrap.ts
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


export class kwAppBootstrap extends kwApp
{
	constructor()
	{
		super(kwAppEnum.bootstrap);
		//console.log('kwAppBootstrap::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppBootstrap::canTransition() called');
		return true;
	}

}

