/**********************************************************************
 *
 * kwNg/main/actTag/kwActTagCtrlList.ts
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
import { Component }                from "@angular/core";

import { kwHttpMsg }                from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }         from "@kwNgClass/kwNgCtrlDataList";

import { kwActTagMsg }              from "./kwActTagMsg";
import { kwActTagList }             from "./kwActTagList";

//@formatter:on


@Component({
	selector: 'kw-act-tag-ctrl-list',
	template: `<br>`,
})
export class kwActTagCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwActTagMsg,
	                srvcData: kwActTagList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwActTagCtrlList::constructor() called");
	}
}
