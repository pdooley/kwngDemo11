/**********************************************************************
 *
 * kw/class/xField/kwXFieldTZCode.ts
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
import {kw }    	            from "@kw/kw";
import {kwXField }		        from "./kwXField";
import {kwXFieldEnum }		    from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldTZCode extends kwXField
{

	constructor()
	{
		super(kwXFieldEnum.tzcode);
		//console.log("kwXFieldTZCode::constructor() is called.");
	}

	transform(val: any, sName: string): any
	{
		//console.log("kwXFieldTZCode::transform() called.");

		if (!kw.isString(val))
		{
			console.error("kwXFieldTZCode::transform() val for [", sName, "] is not an object.");
			return null;
		}

		const valNew: any= val.sCode;
		if (!kw.isString(valNew))
		{
			console.error("kwXFieldTZCode::transform() field [" + sName + "] is undefined.");
			return null;
		}

		return valNew;
	}

}

