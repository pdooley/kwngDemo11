/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrForm.ts
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

import {kw }                from "@kw/kw";
import {kwBSCurrMdl }	    from './kwBSCurrMdl';
import {kwBSCurrMsg }       from "./kwBSCurrMsg";
import {kwBSCurrMsgFcty }   from "./kwBSCurrMsgFcty";
import {kwNgCtrlForm }      from "@kwNgClass/kwNgCtrlForm";
//@formatter:off


@Injectable()
export class kwBSCurrForm extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwBSCurrMdl,
	    srvcMsg: kwBSCurrMsg,
	    srvcFcty: kwBSCurrMsgFcty			)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwBSCurrForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwBSCurrForm::loadRec() called.");
		return kw.clone(obj);
	}
}




