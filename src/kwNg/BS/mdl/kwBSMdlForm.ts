/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlForm.ts
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
import {kwBSMdlMdl }		from './kwBSMdlMdl';
import {kwBSMdlMsg }      from "./kwBSMdlMsg";
import {kwBSMdlMsgFcty }  from "./kwBSMdlMsgFcty";
import {kwNgCtrlForm }     from "@kwNgClass/kwNgCtrlForm";
//@formatter:off


@Injectable()
export class kwBSMdlForm extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwBSMdlMdl,
	    srvcMsg: kwBSMdlMsg,
	    srvcFcty: kwBSMdlMsgFcty			)
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




