/**********************************************************************
 *
 * kwDlg/class/viewAct/kwViewBtn.ts
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
import { kw }               from "@kw/kw";
import { kwViewBtnSrvc }    from "./kwViewBtnSrvc";
import { kwViewBtnType }    from "./kwViewBtnType";
import { kwTitleType }      from "../../../kwView/class/title/kwTitleType";
import { kwLinkType }       from "../../../kwView/class/link/kwLinkType";
import { kwTitleSrvc }      from "../../../kwView/class/title/kwTitleSrvc";
import { kwLinkSrvc }       from "../../../kwView/class/link/kwLinkSrvc";
//@formatter:on


export class kwViewBtn
{
	title: kwTitleType;
	link: kwLinkType;

	constructor(private type: kwViewBtnType)
	{
		//console.log("kwViewBtn::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwViewBtn::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwViewBtn::init() type is invalid.");
			return false;
		}
		//console.info("kwViewBtn::init() type is ", this.type);

		const title: kwTitleType = this.type.title;
		if (kw.isNull(title))
		{
			console.error("kwViewBtn::init() title is invalid.");
			return false;
		}
		this.title = title;

		const link: kwLinkType = this.type.link;
		if (kw.isNull(link))
		{
			console.error("kwViewBtn::init() link is invalid.");
			return false;
		}
		this.link = link;

		return true;
	}

	getLink(): kwLinkType
	{
		return this.link;
	}

	getTitle(): kwTitleType
	{
		return this.title;
	}

	toString(): string
	{
		return this.constructor.name;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwViewBtn)
	}

}

