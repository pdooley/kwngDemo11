/**********************************************************************
 *
 * kw/class/act/kwActGet.ts
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
import {kwAct }			    from "./kwAct";
import {kwActEnum }			from "./kwActEnum";
import {kwActType }			from "./kwActType";
//@formatter:on


export class kwActGet extends kwAct
{

	constructor(private data: kwActType)
	{
		super(kwActEnum.get, data);
	}

}

