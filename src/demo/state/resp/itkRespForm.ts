/**********************************************************************
 *
 * app/ctrl/resp/itkRespForm.ts
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

import { itkRespMdl }			from './itkRespMdl';
import { itkRespMsg }           from "./itkRespMsg";
import { itkRespMsgFcty }       from "./itkRespMsgFcty";
// @formatter:off


@Injectable()
export class itkRespForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: itkRespMdl,
	    srvcMsg: itkRespMsg,
	    srvcMsgFcty: itkRespMsgFcty	)
	{
		super(srvcMdl, srvcMsg, srvcMsgFcty);
		//console.log("itkRespForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("itkRespForm::loadRec() called.");
		return kw.clone(obj);
	};
}




