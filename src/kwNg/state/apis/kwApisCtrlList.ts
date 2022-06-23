/**********************************************************************
 *
 * kwNg/main/apis/kwApisCtrlList.ts
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

import { kwApisMsg }                from "./kwApisMsg";
import { kwApisList }               from "./kwApisList";

//@formatter:on


@Component({
	selector: 'kw-apis-ctrl-list',
	template: `<br>`,
})
export class kwApisCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwApisMsg,
	                srvcData: kwApisList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp);
		//console.log("kwApisCtrlList::constructor() called");
	}
}
