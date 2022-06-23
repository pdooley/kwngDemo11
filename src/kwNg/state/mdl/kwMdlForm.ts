/**********************************************************************
 *
 * kwNg/ctrl/model/kwMdlForm.ts
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
import { kwNgCtrlFormSub }  from "@kwNgClass/kwNgCtrlFormSub";

import { kwMdlMdl }       from './kwMdlMdl';
import { kwMdlMsg }       from "./kwMdlMsg";
import { kwMdlMsgFcty }         from "./kwMdlMsgFcty";

//@formatter:off


@Injectable()
export class kwMdlForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwMdlMdl,
	    srvcMsg: kwMdlMsg,
	    srvcFcty: kwMdlMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwMdlForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwMdlForm::loadRec() called.");
		return kw.clone(obj);
	}
}




