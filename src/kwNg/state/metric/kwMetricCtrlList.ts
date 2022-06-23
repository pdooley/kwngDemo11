/**********************************************************************
 *
 * kwNg/main/metric/kwMetricCtrlList.ts
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

import { kwHttpMsg }                from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import { kwMetricMsg }          from "./kwMetricMsg";
import { kwMetricList }          from "./kwMetricList";

//@formatter:on


@Component({
	selector: 'kw-metric-ctrl-list',
	template: `<br>`,
})
export class kwMetricCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwMetricMsg,
	                srvcData: kwMetricList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwMetricCtrlList::constructor() called");
	}
}
