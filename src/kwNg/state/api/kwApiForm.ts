/**********************************************************************
 *
 * kwNg/ctrl/api/kwApiForm.ts
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

import { kw }                       from "@kw/kw"
import { kwNgCtrlFormSub }          from "@kwNgClass/kwNgCtrlFormSub";

import { kwApiMdl }			        from './kwApiMdl';
import { kwApiMsg }                 from "./kwApiMsg";
import { kwApiMsgFcty }             from "./kwApiMsgFcty";

//@formatter:off


@Injectable()
export class kwApiForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwApiMdl,
	    srvcMsg: kwApiMsg,
	    srvcFcty: kwApiMsgFcty   )
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwApiForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwApiForm::loadRec() called.");
		return kw.clone(obj);
	}
}




