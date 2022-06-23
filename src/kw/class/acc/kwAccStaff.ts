/**********************************************************************
 *
 * kw/class/acc/kwAccStaff.ts
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


export class kwAccStaff extends kwAcc
{
	constructor()
	{
		super(kwAccEnum.staff);
	}

}

