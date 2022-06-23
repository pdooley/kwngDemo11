/**********************************************************************
 *
 * itk/srvc/guest/itkGuestForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Injectable }	        from '@angular/core';

import { kw }                   from "../../../kw/kw";
import { kwNgCtrlFormSub }      from "../../../kwNg/state/kwNgCtrlFormSub";

import { itkGuestMdl }		    from './itkGuestMdl';
import { itkGuestMsg }          from "./itkGuestMsg";
import { itkGuestMsgFcty }      from "./itkGuestMsgFcty";
// @formatter:off


@Injectable()
export class itkGuestForm extends kwNgCtrlFormSub
{

	constructor(
	    srvcMdl: itkGuestMdl,
	    srvcMsg: itkGuestMsg,
	    srvcMsgFcty: itkGuestMsgFcty	)
	{
		super(srvcMdl, srvcMsg, srvcMsgFcty);
		//console.log("itkGuestForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("itkGuestForm::loadRec() called.");
		return kw.clone(obj);
	};

}




