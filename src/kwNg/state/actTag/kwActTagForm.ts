/**********************************************************************
 *
 * kwNg/ctrl/actTag/kwActTagForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kw }                       from "@kw/kw" ;
import { kwNgCtrlFormSub }          from "@kwNgClass/kwNgCtrlFormSub";

import { kwActTagMdl }			    from "./kwActTagMdl";
import { kwActTagMsg }              from "./kwActTagMsg";
import { kwActTagMsgFcty }          from "./kwActTagMsgFcty";

//@formatter:off


@Injectable()
export class kwActTagForm extends kwNgCtrlFormSub
{
	public constructor(
		srvcMdl: kwActTagMdl,
	    srvcMsg: kwActTagMsg,
	    srvcFcty: kwActTagMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwActTagForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwActTagForm::loadRec() called.");
		return kw.clone(obj);
	}
}




