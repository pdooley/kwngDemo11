/**********************************************************************
 *
 * kwNg/BS/langs/kwBSLangsMap.ts
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
import {Injectable }	        from '@angular/core';

import {kwLangType }           from "@kwClass/lang/kwLangType";
import {kwLangMap }            from "@kwClass/lang/kwLangMap";
import {kwBSTraceVal }         from "@kwNgBS/trace/kwBSTraceVal";
import {kwMap }                from "@kwClass/kwMap";
import {kwNgStDataMap }        from "@kwNgClass/kwNgStDataMap";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSLangsMap extends kwNgStDataMap
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	protected broadcast(data: object[]): void
	{
		//console.log("kwBSLangsMap::change() called.");
		this.theSignal.emit(<kwLangType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log("kwBSLangsMap::createMap() called.");
		const map = new kwLangMap(data);
		if (!map.init())
		{
			console.error("kwBSLangsMap::createMap() error creating map.");
			return;
		}

		return map;
	}

	public get(): kwLangType[]
	{
		return <kwLangType[]>super.get();
	}
}
