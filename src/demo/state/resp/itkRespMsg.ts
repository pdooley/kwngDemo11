/**********************************************************************
 *
 * app/state/resp/itkRespMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:on
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
import { kwNgStMsg }        from "../../../kwNg/state/kwNgStMsg";

import { itkRespApi }       from "./itkRespApi";
// @formatter:off


@Injectable()
export class itkRespMsg extends kwNgStMsg
{
	constructor(
		srvcTrace: kwBSTraceVal,
	    srvcApi: itkRespApi     )
	{
		super(srvcTrace, srvcApi);
		//console.log("itkRespMsg::constructor() called.");
	}
}
