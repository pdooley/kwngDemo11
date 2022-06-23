/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrCtrlApi.ts
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
import {kwBSCurrApi }      from "./kwBSCurrApi";
import {kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";
//@formatter:off


const sSTATE: string = "currency";


@Component({
	selector: 'kw-bootstrap-curr-ctrl-api',
	template: `<br>`,
})
export class kwBSCurrCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSCurrApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSCurrCtrlApi::constructor() called");
	}
}
