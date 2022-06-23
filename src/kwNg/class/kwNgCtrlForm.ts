/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlForm.ts
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
import { Injectable }       from '@angular/core';

import { kwCtrlForm }       from "@kwCtrl/kwCtrlForm";
import { kwStMsgFcty }      from "@kwState/kwStMsgFcty";

import { kwNgStMdl }        from "./kwNgStMdl";
import { kwNgStMsg }        from "./kwNgStMsg";

//@formatter:off


export abstract class kwNgCtrlForm extends kwCtrlForm
{
	constructor(
		srvcSrc: kwNgStMdl,
	    srvcDst: kwNgStMsg,
		srvcFcty: kwStMsgFcty)
	{
		super(srvcSrc, srvcDst, srvcFcty);
		//console.log(this.sClass, "::constructor() called.");
	}

}




