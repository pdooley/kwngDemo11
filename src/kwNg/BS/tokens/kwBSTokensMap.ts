/**********************************************************************
 *
 * kwNg/BS/tokens/kwBSTokensMap.ts
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

import {kw}                 from "@kw/kw";
import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwMap }             from "@kwClass/kwMap";
import {kwNgStDataMap }     from "@kwNgClass/kwNgStDataMap";
import {kwTokenMap }        from "@kwClass/token/kwTokenMap";
import {kwTokenType }       from "@kwClass/token/kwTokenType";


const sTAG_ID: string = "id";
const sORG: string = "org";


@Injectable()
export class kwBSTokensMap extends kwNgStDataMap
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
		this.theSignal.emit(<kwTokenType[]>data);
	}

	protected createMap(data: object[]): kwMap
	{
		//console.log(this.sClass, "::createMap() called.");
		const map = new kwTokenMap(data);
		if (! map.init())
		{
			console.error(this.sClass, "::createMap() error creating map.");
			return;
		}
		return map;
	}

	public get(): kwTokenType[]
	{
		return <kwTokenType[]>super.get();
	}

	isOrgSet(): boolean
	{
		//console.log(this.sClass, "::isOrgSet() called");

		const tokens: kwMap = this.getMap();
		if (! kwMap.is(tokens))
		{
			//console.info(this.sClass, "::isOrgSet() tokens not loaded.");
			return false;
		}
		//console.info(this.sClass, "::isOrgSet() tokens are ", tokens);

		const org: Object = tokens.getByCode(sORG);
		if (kw.isNull(org))
		{
			console.error(this.sClass, "::isOrgSet() [org] is invalid");
			return false;
		}
		//console.info(this.sClass, "::isOrgSet() org is ", org);

		const sVal = org["sVal"];
		if (!kw.isString(sVal) || sVal.length === 0)
		{
			//console.info(this.sClass, "::isOrgSet() [sVal] is not loaded.");
			return false;
		}
		//console.info(this.sClass, "::isOrgSet() sVal is ", sVal);

		return true;
	}

}
