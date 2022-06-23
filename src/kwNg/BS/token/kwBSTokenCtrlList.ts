/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenCtrlList.ts
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

import {kwBSTokenMsg }          from "./kwBSTokenMsg";
import {kwBSTokenList }         from "./kwBSTokenList";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-token-ctrl-list',
	template: `<br>`,
})
export class kwBSTokenCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwBSTokenMsg,
	                srvcData: kwBSTokenList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSTokenCtrlList::constructor() called");
	}
}
