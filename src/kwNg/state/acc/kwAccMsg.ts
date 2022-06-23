/**********************************************************************
 *
 * kwNg/state/acc/kwAccMsg.ts
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
import { Injectable }   from '@angular/core';

import { kwBSTraceVal } from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStMsg }    from "@kwNgClass/kwNgStMsg";

import { kwAccApi }     from "./kwAccApi";

//@formatter:off


@Injectable()
export class kwAccMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwAccApi   )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
