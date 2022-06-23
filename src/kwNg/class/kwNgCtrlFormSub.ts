/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlFormSub.ts
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
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";

import { kwNgCtrlForm }     from "./kwNgCtrlForm";
import { kwNgStMdl }        from "./kwNgStMdl";
import { kwNgStMsg }        from "./kwNgStMsg";

//@formatter:off


export abstract class kwNgCtrlFormSub extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwNgStMdl,
	    srvcMsg: kwNgStMsg,
	    srvcFcty: kwStMsgFcty    )
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log(this.sClass, "::constructor() called.");
	}
}




