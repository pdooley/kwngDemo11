/**********************************************************************
 *
 * app/class/viewCont/kwViewCont.ts
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
import { kw }               from "@kw/kw";


import { kwTitleType }      from "../title/kwTitleType";
import { kwViewContType }   from "./kwViewContType";
//@formatter:on


export class kwViewCont
{
	title: kwTitleType;
	nHeight: number;

	constructor(private type: kwViewContType)
	{
		//console.log("kwViewCont::constructor() called");
	}

	init(): boolean
	{
		//console.log("kwViewCont::init() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwViewCont::init() type is invalid.");
			return false;
		}
		//console.info("kwViewCont::init() type is ", this.type);

		const title: kwTitleType = this.type.title;
		if (kw.isNull(title))
		{
			console.error("kwViewCont::init() sTitle is invalid.");
			return false;
		}
		//console.info("kwViewCont::init() title is ", title);
		this.title = title;

		const nHeight: number = this.type.nHeight;
		if (!kw.isNumber(nHeight))
		{
			console.error("kwViewCont::init() nHeight is invalid.");
			return false;
		}
		//console.info("kwViewCont::init() nHeight is ", nHeight);
		this.nHeight = nHeight;


		return true;
	}

	getHeight(): number
	{
		return this.nHeight;
	}

	getTitle(): kwTitleType
	{
		return this.title;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwViewCont)
	}

}

