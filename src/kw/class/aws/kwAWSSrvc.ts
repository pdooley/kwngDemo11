/**********************************************************************
 *
 * kw/class/api/kwAWSSrvc.ts
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
import {kw }		            from "@kw/kw";
import {kwApi }                from "@kwClass/api/kwApi";
import {kwApiSrvc }			from "@kwClass/api/kwApiSrvc";
import {kwApiType }            from "@kwClass/api/kwApiType";
//@formatter:on


const sTAG: string = "kwAWSSrvc";


export class kwAWSSrvc
{

	static getItem(sItem: string, items: Object): kwApi
	{
		if (!kw.isString(sItem))
		{
			console.error(sTAG + "::getItem() sItem is invalid.");
			return;
		}
		//console.info(sTAG + "::getItem() sItem ", sItem);

		if ( kw.isNull(items))
		{
			console.error(sTAG + "::getItem() items is invalid.");
			return;
		}

		const apiJson: kwApiType = items[ sItem ];
		if (kw.isNull(apiJson))
		{
			console.error(sTAG + "::getItem() sItem has no api - update the apis.json file.");
			return;
		}

		const item = new kwApi(apiJson);
		if (!item.init())
		{
			console.error(sTAG + "::getItem() error creating api");
			return;
		}

		return item;
	}

	static isType(obj: object): boolean
	{
		return true;
	}

	static in(nVal: number): boolean
	{
		return false
	}

	static toEnum(sVal: string): number
	{
		return -1;
	}
}

