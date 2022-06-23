/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrCtrlList.ts
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

import {kwBSCurrMsg }          from "./kwBSCurrMsg";
import {kwBSCurrList }         from "./kwBSCurrList";
import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-curr-ctrl-list',
	template: `<br>`,
})
export class kwBSCurrCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSCurrMsg,
	                srvcData: kwBSCurrList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSCurrCtrlList::constructor() called");
	}
}
