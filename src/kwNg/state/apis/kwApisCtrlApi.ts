/**********************************************************************
 *
 * kwNg/ctrl/apis/kwApisCtrlApi.ts
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
import { Component }            from '@angular/core';

import { kwBSApisList }         from "@kwNgBS/apis/kwBSApisList";
import { kwNgCtrlApi }          from "@kwNgClass/kwNgCtrlApi";

import { kwApisApi }            from "./kwApisApi";

//@formatter:off


const sSTATE: string = "apis";


@Component({
	selector: 'kw-apis-ctrl-api',
	template: `<br>`,
})
export class kwApisCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwApisApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwApisCtrlApi::constructor() called");
	}
}
