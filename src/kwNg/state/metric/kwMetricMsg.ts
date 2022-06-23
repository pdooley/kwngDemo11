/**********************************************************************
 *
 * kwNg/state/metric/kwMetricMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { Injectable }	            from '@angular/core';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }          from "@kwNgClass/kwNgStMsg";

import { kwMetricApi }          from "./kwMetricApi";

//@formatter:off


@Injectable()
export class kwMetricMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwMetricApi)
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
