/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlCtrlList.ts
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
import {Component }            from "@angular/core";

import {kwBSMdlMsg }          from "./kwBSMdlMsg";
import {kwBSMdlList }         from "./kwBSMdlList";
import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-mdl-ctrl-list',
	template: `<br>`,
})
export class kwBSMdlCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSMdlMsg,
	                srvcData: kwBSMdlList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSMdlCtrlList::constructor() called");
	}
}
