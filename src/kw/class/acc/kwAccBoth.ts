/**********************************************************************
 *
 * kw/class/acc/kwAccBoth.ts
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
import {kwAcc }			    from "./kwAcc";
import {kwAccEnum }			from "./kwAccEnum";
//@formatter:on


export class kwAccBoth extends kwAcc
{
	constructor()
	{
		super(kwAccEnum.both);
	}

}

