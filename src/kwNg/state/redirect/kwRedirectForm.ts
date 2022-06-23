/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwRedirectForm.ts
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

import { kw }                   from "@kw/kw"
import { kwNgCtrlFormSub }      from "@kwNgClass/kwNgCtrlFormSub"

import { kwRedirectMdl }        from './kwRedirectMdl';
import { kwRedirectMsg }        from "./kwRedirectMsg";
import { kwRedirectMsgFcty }    from "./kwRedirectMsgFcty";

//@formatter:off


@Injectable()
export class kwRedirectForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwRedirectMdl,
	    srvcMsg: kwRedirectMsg,
	    srvcFcty: kwRedirectMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwRedirectForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwRedirectForm::loadRec() called.");
		return kw.clone(obj);
	}
}




