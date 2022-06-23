/**********************************************************************
 *
 * kwNg/ctrl/TZs/kwBSTZsCtrlApi.ts
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
import {Component }         from '@angular/core';

import {kwBSApisList}       from "@kwNgBS/apis/kwBSApisList";
import {kwNgCtrlApi}        from "@kwNgClass/kwNgCtrlApi";

import {kwBSTZsApi}         from "./kwBSTZsApi";

//@formatter:off


const sSTATE: string = "timezones";


@Component({
	selector: 'kw-bootstrap-timezones-ctrl-api',
	template: `<br>`,
})
export class kwBSTZsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSTZsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSTZsCtrlApi::constructor() called");
	}
}
