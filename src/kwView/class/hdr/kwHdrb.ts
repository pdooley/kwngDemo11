/**********************************************************************
 *
 * kwView/class/hdr/kwHdr.ts
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
import {JsonProperty}   from "json-typescript-mapper";

import {kwTabb}         from "@kwViewClass/tab/kwTabb";

//@formatter:on

export class kwHdrb
{
	@JsonProperty({clazz: kwTabb, name: 'tabs'})
	public tabs: kwTabb[];

	public sTitle: string;
	public sTitleClass: string;

	constructor(private data: object)
	{
		//console.log("kwHdr::constructor() called");
	}

}

