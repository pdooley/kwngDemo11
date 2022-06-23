/**********************************************************************
 *
 * kwView/class/btn/kwBtnFcty.ts
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
import {kw}                 from "@kw/kw";
import {kwApiType}          from "../../../kw/class/api/kwApiType";
import {kwBtn }             from "./kwBtn";
import {kwBtnType }         from "./kwBtnType";
//@formatter:on


const sTAG: string = "actions";


export class kwBtnFcty
{

	static create(info: kwApiType): kwBtn
	{
		//console.log("kwBtnFcty::create() is called.");

		if (kw.isNull(info))
		{
			console.error("kwBtnFcty::create() info is invalid.");
			return;
		}
		//console.info("kwBtnFcty::create() info is ", info);

		const type: kwBtnType = info[sTAG];
		if (kw.isNull(type))
		{
			console.error("kwBtnFcty::create() type is invalid.");
			return;
		}
		//console.info("kwBtnFcty::create() type is ", type);

		const btn: kwBtn = new kwBtn(type);
		if (!btn.init())
		{
			console.error("kwBtnFcty::create() error creating btn.");
			return;
		}
		//console.info("kwBtnFcty::create() btn is ", btn);

		return btn;
	}

}

