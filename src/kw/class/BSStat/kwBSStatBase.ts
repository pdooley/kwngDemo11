/**********************************************************************
 *
 * kw/class/BSStat/kwBSStatBase.ts
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


export class kwBSStatBase extends kwBSStat
{
	constructor()
	{
		super(kwBSStatEnum.base);
		//console.log('kwBSStatInit::constructor() called');
	}

	canTransition(prev: kwBSStat): boolean
	{
		//console.log('kwBSStatInit::canTransition() called');

		if (prev.isInit())
		{
			return true;
		}

		console.error("kwBSStatComplete::canTransition() invalid state transition.");
		return false;
	}

}

