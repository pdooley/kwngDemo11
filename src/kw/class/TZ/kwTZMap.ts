/**********************************************************************
 *
 * kw/class/TZ/kwTZMap.ts
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
import {kw }                       from "@kw/kw";
import {kwMap }                    from "@kwClass/kwMap";
import {kwStateX }                 from "@kwClass/kwStateX";

import {kwTZType }                 from "./kwTZType";
//@formatter:off


export class kwTZMap extends kwMap
{

	constructor(data: object[])
	{
		super(data);
		//console.log("kwTZMap::constructor() called.");
	}

	createMap(): boolean
	{
		//console.log("kwTZMap::createMap() called.");

		if (kw.isNull(this.theArr))
		{
			console.error("kwTZMap::init() data is invalid");
			return false;
		}

		const theArr = <kwTZType[]>this.theArr;

		const theMap = new Map(
			theArr.map(x => [x.sCode, x] as [string, object] )
		);
		//console.info("kwTZMap::createMap() theMap is ", theMap);

		this.setMap(theMap);

		return true;
	}

	xImport(rec: object): object
	{
		//console.log("kwTZMap::ximport() called.");

		if (kw.isNull(rec))
		{
			console.error("kwTZMap::ximport() record is invalid.");
			return
		}

		const x: kwStateX = new kwStateX(rec);
		if (!x.init())
		{
			console.error("kwMdlMap::ximport() error creating x.");
			return
		}

		const sCode: string = x.getString("sCode");
		if (!kw.isString(sCode))
		{
			console.error("kwTZMap::xImport() sCode is invalid.");
			return;
		}

		const sName: string = x.getString("sName");
		if (!kw.isString(sName))
		{
			console.error("kwTZMap::xImport() sName is invalid.");
			return;
		}

		const sNative: string = x.getString("sNative");
		if (!kw.isString(sNative))
		{
			console.error("kwTZMap::xImport() sNative is invalid.");
			return;
		}

		const nId: number = x.getNumber("nId");
		if (!kw.isNumber(nId))
		{
			console.error("kwTZMap::xImport() nId is invalid.");
			return;
		}

		const type: kwTZType = {
			sCode: sCode,
			sName: sName,
			nId: nId
		}

		return type;
	}



}
