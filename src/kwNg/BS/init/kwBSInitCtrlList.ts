/**********************************************************************
 *
 * kwNg/BS/data/kwBSInitCtrlList.ts
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

import {kwBSInitMsg }          from "./kwBSInitMsg";
import {kwBSInitList }         from "./kwBSInitList";
import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-init-ctrl-list',
	template: `<br>`,
})
export class kwBSInitCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSInitMsg,
	                srvcData: kwBSInitList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSInitCtrlList::constructor() called");
	}
}
