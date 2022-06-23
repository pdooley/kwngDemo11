/**********************************************************************
 *
 * kwNg/ctrl/views/kwViewsCtrlList.ts
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

import { kwViewsMsg }           from "./kwViewsMsg";
import { kwViewsList }          from "./kwViewsList";

//@formatter:on


@Component({
	selector: 'kw-views-ctrl-list',
	template: `<br>`,
})
export class kwViewsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwViewsMsg,
	                srvcData: kwViewsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwViewsHttp::constructor() called");
	}

}
