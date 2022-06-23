/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiCtrlList.ts
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

import {kwHttpMsg }           from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }    from "@kwNgClass/kwNgCtrlDataList";

import {kwBSApiMsg }          from "./kwBSApiMsg";
import {kwBSApiList }         from "./kwBSApiList";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-api-ctrl-list',
	template: `<br>`,
})
export class kwBSApiCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSApiMsg,
	                srvcData: kwBSApiList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSApiCtrlList::constructor() called");
	}
}
