/**********************************************************************
 *
 * kw/class/kwXFieldTZ.ts
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
import {kw }		          from "@kw/kw";
import {kwMap }              from "@kwClass/kwMap";
import {kwXField }		      from "./kwXField";
import {kwXFieldEnum }		  from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldTZ extends kwXField
{

	constructor(private srvcTZs: kwMap)
	{
		super(kwXFieldEnum.tz);
		//console.log("kwXFieldTZ::constructor() is called.");
	}

	transform(val: any, sName: string): any
	{
		//console.log("kwXFieldTZ::transform() called.");

		if (!kw.isString(val))
		{
			console.error("kwXFieldTZ::transform() field [" + sName + "] is undefined.");
			return null;
		}

		const valNew: any = this.srvcTZs.getByCode(val);
		if (kw.isNull(valNew))
		{
			console.error("kwXFieldTZ::transform() field [" + sName + "] is undefined.");
			return null;
		}

		return valNew;
	}
}

