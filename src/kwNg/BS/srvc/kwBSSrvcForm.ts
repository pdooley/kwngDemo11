/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcForm.ts
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
import {kwNgCtrlForm }      from "@kwNgClass/kwNgCtrlForm";

import {kwBSSrvcMdl }		from './kwBSSrvcMdl';
import {kwBSSrvcMsg }       from "./kwBSSrvcMsg";
import {kwBSSrvcMsgFcty }   from "./kwBSSrvcMsgFcty";

//@formatter:off


@Injectable()
export class kwBSSrvcForm extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwBSSrvcMdl,
	    srvcMsg: kwBSSrvcMsg,
	    srvcFcty: kwBSSrvcMsgFcty			)
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




