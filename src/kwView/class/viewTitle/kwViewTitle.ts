/**********************************************************************
 *
 * kwView/class/viewTitle/kwViewTitle.ts
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

import { kwLogoType }           from "../logo/kwLogoType";
import { kwTitleType }          from "../title/kwTitleType";
import { kwViewTitleType }      from "./kwViewTitleType";
//@formatter:on


export class kwViewTitle
{
	logo: kwLogoType;
	title: kwTitleType;

	sImage: string;
	sUrl: string;

	nHeight: number;

	bIsXVisible: boolean;

	constructor(private type: kwViewTitleType)
	{
		//console.log("kwViewTitle::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwViewTitle::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwViewTitle::init() type is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() type is ", this.type);

		const nHeight: number = this.type.nHeight;
		if (!kw.isNumber(nHeight))
		{
			console.error("kwViewTitle::init() nHeight is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() nHeight is ", nHeight);
		this.nHeight = nHeight;

		const sImage: string = this.type.sImage;
		if (!kw.isString(sImage))
		{
			console.error("kwViewTitle::init() sImage is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() sImage is ", sImage);
		this.sImage = sImage;

		const bIsXVisible: boolean = this.type.bIsXVisible;
		if (!kw.isBoolean(bIsXVisible))
		{
			console.error("kwViewTitle::init() bIsXVisible is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() bIsXVisible is ", bIsXVisible);
		this.bIsXVisible = bIsXVisible;

		const logo: kwLogoType = this.type.logo;
		if (kw.isNull(logo))
		{
			console.error("kwViewTitle::init() logo is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() logo is ", logo);
		this.logo = logo;

		const title: kwTitleType = this.type.title;
		if (kw.isNull(title))
		{
			console.error("kwViewTitle::init() title is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() title is ", title);
		this.title = title;

		const sUrl: string = this.type.sUrl;
		if (!kw.isString(sUrl))
		{
			console.error("kwViewTitle::init() sUrl is invalid.");
			return false;
		}
		//console.info("kwViewTitle::init() sUrl is ", sUrl);
		this.sUrl = sUrl;

		return true;
	}

	getHeight(): number
	{
		return this.nHeight;
	}

	getImage(): string
	{
		return this.sImage;
	}

	isXVisible(): boolean
	{
		return this.bIsXVisible;
	}

	getLogo(): kwLogoType
	{
		return this.logo;
	}

	getTitle(): kwTitleType
	{
		return this.title;
	}

	getUrl(): string
	{
		return this.sUrl;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwViewTitle)
	}

}

