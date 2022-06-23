/**********************************************************************
 *
 * kwNg/main/acc/kwAccCtrlList.ts
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
import { Component }        from "@angular/core";

import { kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList } from "@kwNgClass/kwNgCtrlDataList";

import { kwAccMsg }         from "./kwAccMsg";
import { kwAccList }        from "./kwAccList";

//@formatter:on


@Component({
	selector: 'kw-acc-ctrl-list',
	template: `<br>`,
})
export class kwAccCtrlList extends kwNgCtrlDataList
{
	constructor(
		srvcMsg: kwAccMsg,
	    srvcData: kwAccList,
	    srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwAccCtrlList::constructor() called");
	}
}
