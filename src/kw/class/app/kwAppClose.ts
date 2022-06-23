/**********************************************************************
 *
 * kw/class/app/kwAppClose.ts
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


export class kwAppClose extends kwApp
{
	constructor()
	{
		super(kwAppEnum.close);
		//console.log('kwAppClose::constructor() called');
	}

	canTransition(prev: kwApp): boolean
	{
		//console.log('kwAppClose::canTransition() called');
		return false;
	}

}

