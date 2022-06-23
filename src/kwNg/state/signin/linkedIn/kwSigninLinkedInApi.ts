//@formatter:on
import {Injectable}         from '@angular/core';

import {kwBSTraceVal}       from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStApi}          from "@kwNgClass/kwNgStApi";

//@formatter:off


@Injectable()
export class kwSigninLinkedInApi extends kwNgStApi
{
	constructor(srvcTrace: kwBSTraceVal)
	{
		super(srvcTrace);
		//console.log("kwSigninLinkedInApi::constructor() called.");
	}
}
