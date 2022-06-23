/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiCtrlApi.ts
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
import {Component }       from '@angular/core';

import {kwNgCtrlApi }     from "@kwNgClass/kwNgCtrlApi";

import {kwBSApiList }     from "./kwBSApiList";
import {kwBSApiApi }      from "./kwBSApiApi";
//@formatter:off


const sSTATE: string = "api";


@Component({
	selector: 'kw-bootstrap-api-ctrl-api',
	template: `<br>`,
})
export class kwBSApiCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApiList,
		srvcDst: kwBSApiApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSApiCtrlApi::constructor() called");
	}
}
