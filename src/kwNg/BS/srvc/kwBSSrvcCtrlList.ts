/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcCtrlList.ts
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

import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import {kwBSSrvcMsg }          from "./kwBSSrvcMsg";
import {kwBSSrvcList }         from "./kwBSSrvcList";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-srvc-ctrl-list',
	template: `<br>`,
})
export class kwBSSrvcCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSSrvcMsg,
	                srvcData: kwBSSrvcList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSSrvcCtrlList::constructor() called");
	}
}
