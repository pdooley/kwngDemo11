/**********************************************************************
 *
 * kwNg/ctrl/lang/kwBSLangForm.ts
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
import {Injectable }	        from '@angular/core';

import {kw }                   from "@kw/kw";
import {kwNgCtrlFormSub }      from "@kwNgClass/kwNgCtrlFormSub";

import {kwBSLangMdl }          from './kwBSLangMdl';
import {kwBSLangMsg }          from "./kwBSLangMsg";
import {kwBSLangMsgFcty }      from "./kwBSLangMsgFcty";

//@formatter:off


@Injectable()
export class kwBSLangForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwBSLangMdl,
	    srvcMsg: kwBSLangMsg,
	    srvcFcty: kwBSLangMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwBSLangForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwBSLangForm::loadRec() called.");
		return kw.clone(obj);
	}
}




