/**********************************************************************
 *
 * kwView/class/btn/kwBtn.ts
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
import {kw}                         from "@kw/kw";
import {kwBtnSrvc }                 from "./kwBtnSrvc";
import {kwBtnType }			        from "./kwBtnType";

const sTITLE:    string = 'title';
const sLINK:     string = 'link';
//@formatter:on


export class kwBtn
{
	sTitle: string;
	sLink: string;

	constructor(private type: kwBtnType)
	{
		//console.log("kwBtn::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwBtn::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwBtn::init() type is invalid.");
			return false;
		}

		const sTitle: string = this.type[sTITLE];
		if (!kw.isString(sTitle) || sTitle.length === 0)
		{
			console.error("kwBtn::init() sTitle is invalid.");
			return false;
		}
		//console.info("kwBtn::init() sTitle is [", sTitle, "].");
		this.sTitle = sTitle;

		const sLink: string = this.type[sLINK];
		if (!kw.isString(sLink) || sLink.length === 0)
		{
			console.error("kwBtn::init() sLink is invalid.");
			return false;
		}
		//console.info("kwBtn::init() sLink is [", sLink, "].");
		this.sLink = sLink;

		return true;
	}

	getTitle(): string
	{
		return this.sTitle;
	}

	getLink(): string
	{
		return this.sLink;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwBtn)
	}

}

