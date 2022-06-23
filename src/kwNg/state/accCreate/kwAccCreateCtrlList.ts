/**********************************************************************
 *
 * kwNg/main/accCreate/kwAccCreateCtrlList.ts
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
import { Component }            from "@angular/core";

import { kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import { kwAccCreateMsg }       from "./kwAccCreateMsg";
import { kwAccCreateList }      from "./kwAccCreateList";

//@formatter:on


@Component({
	selector: 'kw-acc-create-ctrl-list',
	template: `<br>`,
})
export class kwAccCreateCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwAccCreateMsg,
	                srvcData: kwAccCreateList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwAccCreateCtrlList::constructor() called");
	}
}
