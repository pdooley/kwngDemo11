/**********************************************************************
 *
 * kwNg/main/accs/kwAccsCtrlList.ts
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

import { kwAccsMsg }                from "./kwAccsMsg";
import { kwAccsList }               from "./kwAccsList";

//@formatter:on


@Component({
	selector: 'kw-accs-ctrl-list',
	template: `<br>`,
})
export class kwAccsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwAccsMsg,
	                srvcData: kwAccsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwAccsCtrlList::constructor() called");
	}
}
