/**********************************************************************
 *
 * kwNg/ctrl/inits/kwInitsCtrlApi.ts
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
import { Component }        from '@angular/core';

import { kwBSApisList }     from "@kwNgBS/apis/kwBSApisList"
import { kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";

import { kwInitsApi }       from "./kwInitsApi";

//@formatter:off


const sSTATE: string = "inits";


@Component({
	selector: 'kw-inits-ctrl-api',
	template: `<br>`,
})
export class kwInitsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwInitsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwInitsCtrlApi::constructor() called");
	}
}
