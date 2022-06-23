/**********************************************************************
 *
 * app/state/crit/itkCritMdl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Injectable }       from '@angular/core';

import { kwBSTraceVal }     from "../../../kwNg/BS/trace/kwBSTraceVal";
import { kwNgStMdl }         from "../../../kwNg/state/kwNgStMdl";
// @formatter:off

@Injectable()
export class itkCritMdl extends kwNgStMdl
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("itkCritMdl::constructor() called.");
	}
}