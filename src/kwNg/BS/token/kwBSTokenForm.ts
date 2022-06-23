/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenForm.ts
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
import {Injectable }	    from '@angular/core';

import {kw }               from "@kw/kw";
import {kwNgCtrlForm }     from "@kwNgClass/kwNgCtrlForm";

import {kwBSTokenMdl }	   from './kwBSTokenMdl';
import {kwBSTokenMsg }     from "./kwBSTokenMsg";
import {kwBSTokenMsgFcty } from "./kwBSTokenMsgFcty";

//@formatter:off


@Injectable()
export class kwBSTokenForm extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwBSTokenMdl,
	    srvcMsg: kwBSTokenMsg,
	    srvcFcty: kwBSTokenMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log(this.sClass, "::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log(this.sClass, "::loadRec() called.");
		return kw.clone(obj);
	}
}




