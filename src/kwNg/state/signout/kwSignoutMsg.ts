/**********************************************************************
 *
 * kwNg/state/signout/kwSignoutMsg.ts
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

import { kwSignoutApi }     from "./kwSignoutApi";

//@formatter:off


@Injectable()
export class kwSignoutMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwSignoutApi   )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
