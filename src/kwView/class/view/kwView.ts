/**********************************************************************
 *
 * kw/class/view/kwView.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 kWunst corporation
 *
 **********************************************************************/

//@formatter:off
import { kw }                   from "@kw/kw";

import { kwViewBtnType }        from "../viewBtn/kwViewBtnType";
import { kwViewContSrvc }       from "../viewCont/kwViewContSrvc";
import { kwViewContType }       from "../viewCont/kwViewContType";
import { kwViewSrvc }           from "./kwViewSrvc";
import { kwViewTitleSrvc }      from "../viewTitle/kwViewTitleSrvc";
import { kwViewTitleType }      from "../viewTitle/kwViewTitleType";
import { kwViewType }           from "./kwViewType";
//@formatter:on


export class kwView
{
	btns: kwViewBtnType[];
	content: kwViewContType;
	title: kwViewTitleType;

	sImage: string;
	sUrl: string;

	bHasClose: boolean;

	constructor(private type: kwViewType)
	{
		//console.log("kwView::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwView::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwView::init() type is invalid.");
			return false;
		}
		//console.info("kwView::init() type is ", this.type);

/*		const btns: kwViewBtnType[] = this.type.btns;
		if (!kw.isArray(btns))
		{
			console.error("kwView::init() btns is invalid.");
			return false;
		}
		//console.info("kwView::init() btns is ", btns);
		this.btns = btns;

		const content: kwViewContType = this.type.content;
		if (kw.isNull(content))
		{
			console.error("kwView::init() content is invalid.");
			return false;
		}
		//console.info("kwView::init() content is ", content);
		this.content = content;

		const bHasClose: boolean = this.type.bHasClose;
		if (!kw.isBoolean(bHasClose))
		{
			console.error("kwView::init() bHasClose is invalid.");
			return false;
		}
		//console.info("kwView::init() bHasClose is ", bHasClose);
		this.bHasClose = bHasClose;

		const sImage: string = this.type.sImage;
		if (!kw.isString(sImage))
		{
			console.error("kwView::init() sImage is invalid.");
			return false;
		}
		//console.info("kwView::init() sImage is ", sImage);
		this.sImage = sImage;

		const title: kwViewTitleType = this.type.title;
		if (kw.isNull(title))
		{
			console.error("kwView::init() title is invalid.");
			return false;
		}
		//console.info("kwView::init() title is ", title);
		this.title = title;

		const sUrl: string = this.type.sUrl;
		if (!kw.isString(sUrl))
		{
			console.error("kwEmail::init() sUrl is invalid.");
			return false;
		}
		//console.info("kwEmail::init() sUrl is ", sUrl);
		this.sUrl = sUrl;
*/

		return true;
	}

	getBtns(): kwViewBtnType[]
	{
		return this.btns;
	}

	getContent(): kwViewContType
	{
		return this.content;
	}

	hasClose(): boolean
	{
		return this.bHasClose;
	}

	getImage(): string
	{
		return this.sImage;
	}

	getTitle(): kwViewTitleType
	{
		return this.title;
	}

	getUrl(): string
	{
		return this.sUrl;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwView)
	}

}

