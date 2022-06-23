/**********************************************************************
 *
 * kwNg/ctrl/org/kwOrgForm.ts
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

import { kw }               from "@kw/kw"
import { kwNgCtrlFormSub }  from "@kwNgClass/kwNgCtrlFormSub"

import { kwOrgMdl }         from './kwOrgMdl';
import { kwOrgMsg }         from "./kwOrgMsg";
import { kwOrgMsgFcty }     from "./kwOrgMsgFcty";

//@formatter:off


@Injectable()
export class kwOrgForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwOrgMdl,
	    srvcMsg: kwOrgMsg,
	    srvcFcty: kwOrgMsgFcty   )
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwOrgForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwOrgForm::loadRec() called.");
		return kw.clone(obj);
	}
}




