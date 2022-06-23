/**********************************************************************
 *
 * kwNg/main/api/kwApiCtrlList.ts
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

import { kwApiMsg }                 from "./kwApiMsg";
import { kwApiList }                from "./kwApiList";

//@formatter:on


@Component({
	selector: 'kw-api-ctrl-list',
	template: `<br>`,
})
export class kwApiCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwApiMsg,
	                srvcData: kwApiList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwApiCtrlList::constructor() called");
	}

}
