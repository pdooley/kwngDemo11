/**********************************************************************
 *
 * kw/class/BSStat/kwBSStatComplete.ts
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


export class kwBSStatComplete extends kwBSStat
{
	constructor()
	{
		super(kwBSStatEnum.complete);
		//console.log('kwBSStatComplete::constructor() called');
	}

	canTransition(prev: kwBSStat): boolean
	{
		//console.log('kwBSStatComplete::canTransition() called');
		if (prev.isBase())
		{
			return true;
		}

		console.error("kwBSStatComplete::canTransition() invalid state transition.");
		return false;
	}

}

