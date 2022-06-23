/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomList.ts
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
import {Injectable }        from '@angular/core';

import {kw }                from "@kw/kw";
import {kwNgStDataList }    from "@kwNgClass/kwNgStDataList";
import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwStateX }          from "@kwClass/kwStateX";


const sTAG_ID: string       = "id";


@Injectable()
export class kwBSCustomList extends kwNgStDataList
{
	private x: kwStateX;

	constructor(
		srvcTrace: kwBSTraceVal)
	{
		super(
			srvcTrace,
			sTAG_ID     );

		//console.log(this.sClass,"::constructor() called.");
	}

//@formatter:on

	public change(data: any): void
	{
		//console.log(this.sClass, "::change() called.");

		super.change(data);

		this.x = new kwStateX(data);
		this.x.init();
	}

	allowEndUsers()
	{
		//console.log("srvcStateCustomBS::allowEndUsers() called.");
		return this.x.getBoolean("allowEndUserAccounts");
	}

	allowResellers()
	{
		//console.log("srvcStateCustomBS::allowResellers() called.");
		return this.x.getBoolean("allowResellerAccounts");
	}

	getClientConnId()
	{
		//console.log("srvcStateCustomBS::getClientConnId() called.");
		return this.x.getString("auth0CustomerConnectionID");
	}

	getClientConnName()
	{
		//console.log("srvcStateCustomBS::getClientConnName() called.");
		return this.x.getString("auth0CustomerConnectionName");
	}

	getConnId()
	{
		//console.log("srvcStateCustomBS::getConnId() called.");

		const sConnId = this.getStaffConnId();
		if (!kw.isString(sConnId))
		{
			console.error("srvcStateCustomBS::getConnId() sConnId is invalid.");
		}

		return sConnId;
	}

	getConnName()
	{
		//console.log("srvcStateCustomBS::getConnName() called.");

		const sConnName = this.getStaffConnName();
		if (!kw.isString(sConnName))
		{
			console.error("srvcStateCustomBS::getConnName() sConnName is invalid.");
		}

		return sConnName;
	}

	//getId()
	//{
	//	//console.log("srvcStateCustomBS::getId() called.");
	//	return this.x.getNumber("Customs_id");
	//}

	getStaffConnId()
	{
		//console.log("srvcStateCustomBS::getStaffConnId() called.");
		return this.x.getString("auth0StaffConnectionID");
	}

	getStaffConnName()
	{
		//console.log("srvcStateCustomBS::getStaffConnName() called.");
		return this.x.getString("auth0StaffConnectionName");
	}

	getScope()
	{
		//console.log("srvcStateCustomBS::getStaffConnName() called.");
		return this.x.getString("auth0Scope");
	}


}
