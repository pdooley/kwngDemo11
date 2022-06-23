/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwBSTZForm.ts
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

import {kwBSTZMdl }            from './kwBSTZMdl';
import {kwBSTZMsg }            from "./kwBSTZMsg";
import {kwBSTZMsgFcty }        from "./kwBSTZMsgFcty";

//@formatter:off


@Injectable()
export class kwBSTZForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwBSTZMdl,
	    srvcMsg: kwBSTZMsg,
	    srvcFcty: kwBSTZMsgFcty	)
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




