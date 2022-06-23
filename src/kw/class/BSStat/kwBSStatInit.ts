/**********************************************************************
 *
 * kw/class/BSStat/kwBSStatInit.ts
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
import {kwBSStat }			    from "./kwBSStat";
import {kwBSStatEnum }			from "./kwBSStatEnum";
//@formatter:on


export class kwBSStatInit extends kwBSStat
{
	constructor()
	{
		super(kwBSStatEnum.init);
		//console.log('kwBSStatInit::constructor() called');
	}

	canTransition(prev: kwBSStat): boolean
	{
		//console.log('kwBSStatInit::canTransition() called');
		return true;
	}

}

