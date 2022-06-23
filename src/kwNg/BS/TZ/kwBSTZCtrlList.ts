/**********************************************************************
 *
 * kwNg/ctrl/TZ/kwBSTZCtrlList.ts
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
import {Component }            from '@angular/core';

import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import {kwBSTZMsg }            from "./kwBSTZMsg";
import {kwBSTZList }           from "./kwBSTZList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-timezone-ctrl-list',
	template: `<br>`,
})
export class kwBSTZCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSTZMsg,
	                srvcData: kwBSTZList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSTZHttp::constructor() called");
	}
}
