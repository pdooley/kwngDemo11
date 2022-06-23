/**********************************************************************
 *
 * kwNg/state/signin/kwSigninMsg.ts
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

import { kwSigninApi }     from "./kwSigninApi";

//@formatter:off


@Injectable()
export class kwSigninMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwSigninApi   )
	{
		super(srvcTrace, srvcApi);
		//console.log(this.sTag, "::constructor() called.");
	}
}
