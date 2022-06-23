/**********************************************************************
 *
 * kwNg/ctrl/model/kwMdlCtrlList.ts
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
import { Component }            from '@angular/core';

import { kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import { kwMdlMsg }           from "./kwMdlMsg";
import { kwMdlList }          from "./kwMdlList";

//@formatter:on


@Component({
	selector: 'kw-mdl-ctrl-list',
	template: `<br>`,
})
export class kwMdlCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwMdlMsg,
	                srvcData: kwMdlList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwMdlHttp::constructor() called");
	}
}
