/**********************************************************************
 *
 * kwNg/main/metrics/kwMetricsCtrlList.ts
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

import { kwMetricsMsg }         from "./kwMetricsMsg";
import { kwMetricsList }        from "./kwMetricsList";

//@formatter:on


@Component({
	selector: 'kw-metrics-ctrl-list',
	template: `<br>`,
})
export class kwMetricsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwMetricsMsg,
	                srvcData: kwMetricsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwMetricsCtrlList::constructor() called");
	}
}
