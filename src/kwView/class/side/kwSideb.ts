/**********************************************************************
 *
 * kwView/class/side/kwSideb.ts
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

import {kwLinkb}         from "@kwViewClass/link/kwLinkb";

//@formatter:on


export class kwSideb
{

	sEnd: string;
	bIsFixed: boolean;
	nTop: number;
	nBottom: number;
	sTitle: string;
	sTitleClass: string;

	@JsonProperty({clazz: kwLinkb, name: 'links'})
	links: kwLinkb[];

	constructor()
	{
		this.sEnd = undefined;
		this.bIsFixed = undefined;
		this.nTop = undefined;
		this.nBottom = undefined;
		this.sTitle = undefined;
		this.sTitleClass = undefined;

		this.links = undefined;
	}

}

