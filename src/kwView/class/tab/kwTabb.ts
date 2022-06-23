/**********************************************************************
 *
 * kwView/class/tab/kwTab.ts
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

//@formatter:on


export class kwTabb
{
	sTitle: string;
	sLink: string;

	constructor()
	{
		//console.log("kwTab::constructor() is called.");
		this.sTitle = undefined;
		this.sLink = undefined;
	}
}

