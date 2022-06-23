/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiForm.ts
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

import {kwBSApiMdl }	   from './kwBSApiMdl';
import {kwBSApiMsg }       from "./kwBSApiMsg";
import {kwBSApiMsgFcty }   from "./kwBSApiMsgFcty";

//@formatter:off


@Injectable()
export class kwBSApiForm extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwBSApiMdl,
	    srvcMsg: kwBSApiMsg,
	    srvcFcty: kwBSApiMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwBSApiForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwBSApiForm::loadRec() called.");
		return kw.clone(obj);
	}
}




