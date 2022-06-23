/**********************************************************************
 *
 * kwNg/BS/TZs/kwBSTZsMap.ts
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
import {Injectable }       from '@angular/core';

import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwMap }            from "@kwClass/kwMap";
import {kwNgStDataMap }    from "@kwNgClass/kwNgStDataMap";
import {kwTZType }         from "@kwClass/TZ/kwTZType";
import {kwTZMap }          from "@kwClass/TZ/kwTZMap";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSTZsMap extends kwNgStDataMap
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
		//console.log(this.sClass, "::change() called.");
		this.theSignal.emit(<kwTZType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log(this.sClass, "::createMap() called.");
		const map = new kwTZMap(data);
		if (!map.init())
		{
			console.error(this.sClass, "::createMap() error creating map.");
			return;
		}

		return map;
	}

	public get(): kwTZType[]
	{
		return <kwTZType[]>super.get();
	}
}
