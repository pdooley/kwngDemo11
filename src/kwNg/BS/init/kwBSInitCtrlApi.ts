/**********************************************************************
 *
 * kwNg/BS/data/kwBSDataCtrlApi.ts
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
import {Component }        from '@angular/core';

import {kwBSApisList }     from "@kwNgBS/apis/kwBSApisList";
import {kwBSInitApi }      from "./kwBSInitApi";
import {kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";
//@formatter:off


const sSTATE: string = "init";


@Component({
	selector: 'kw-bootstrap-init-ctrl-api',
	template: `<br>`,
})
export class kwBSInitCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSInitApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSInitCtrlApi::constructor() called");
	}
}
