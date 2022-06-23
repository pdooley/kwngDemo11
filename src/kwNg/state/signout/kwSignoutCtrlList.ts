/**********************************************************************
 *
 * kwNg/main/signout/kwSignoutCtrlList.ts
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

import { kwSignoutMsg }         from "./kwSignoutMsg";
import { kwSignoutList }        from "./kwSignoutList";

//@formatter:on


@Component({
	selector: 'kw-signout-ctrl-list',
	template: `<br>`,
})
export class kwSignoutCtrlList extends kwNgCtrlDataList
{
	constructor(
		srvcMsg: kwSignoutMsg,
	    srvcData: kwSignoutList,
	    srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwSignoutCtrlList::constructor() called");
	}
}
