/**********************************************************************
 *
 * kwNg/ctrl/err/kwErrCtrlVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { Component }            from "@angular/core";

import { kwBSVal }              from "@kwNgBS/kwBSVal";
import { kwNgCtrlDataVal }      from "@kwNgClass/kwNgCtrlDataVal";

import { kwErrVal }             from "./kwErrVal";

//@formatter:on


@Component({
	selector: 'kw-err-ctrl-val',
	template: `<br>`,
})
export class kwErrCtrlVal extends kwNgCtrlDataVal
{
	constructor(
		srvcBS: kwBSVal,
		srvcStore: kwErrVal     )
	{
		super();
		//console.log("kwErrCtrlVal::constructor() called");
	}

	protected load(srvcBS: kwBSVal): boolean
	{
		//console.log("kwErrCtrlVal::load() called");

		return true;
	}
}
