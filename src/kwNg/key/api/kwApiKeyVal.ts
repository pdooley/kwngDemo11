/**********************************************************************
 *
 * kwNg/state/apiKey/kwApiKeyVal.ts
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
import { Injectable }	    from '@angular/core';

import { kwApi }            from "@kwClass/api/kwApi";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
//@formatter:on

@Injectable()
export class kwApiKeyVal extends kwNgStDataVal
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);

		//console.log(this.sTag,"::constructor() called.");
	}

	public get(): kwApi
	{
		return <kwApi>super.get();
	}
}
