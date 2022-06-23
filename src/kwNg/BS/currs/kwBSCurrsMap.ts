/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsMap.ts
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
import {Injectable }	    from '@angular/core';

import {kwCurrType }       from "@kwClass/curr/kwCurrType";
import {kwCurrMap }        from "@kwClass/curr/kwCurrMap";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwMap }            from "@kwClass/kwMap";
import {kwNgStDataMap }    from "@kwNgClass/kwNgStDataMap";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSCurrsMap extends kwNgStDataMap
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
		//console.log("kwBSCurrsMap::change() called.");
		this.theSignal.emit(<kwCurrType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log("kwBSCurrsMap::createMap() called.");
		const map = new kwCurrMap(data);
		if (!map.init())
		{
			console.error("kwBSCurrsMap::createMap() error creating map.");
			return;
		}
		return map;
	}

	public get(): kwCurrType[]
	{
		return <kwCurrType[]>super.get();
	}
}
