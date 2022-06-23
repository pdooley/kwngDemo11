/**********************************************************************
 *
 * kw/class/act/kwActDel.ts
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


export class kwActDel extends kwAct
{
	constructor(private data: kwActType)
	{
		super(kwActEnum.delete, data);
	}

}

