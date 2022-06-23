/**********************************************************************
 *
 * kwNg/ctrl/api/kwApiCtrlApi.ts
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

import { Component }                from '@angular/core';

import { kwApisList }               from "@kwNgState/apis/kwApisList";
import { kwNgCtrlApi }              from "@kwNgClass/kwNgCtrlApi";

import { kwApiApi }                 from "./kwApiApi";
//@formatter:off


const sSTATE: string = "api";


@Component({
	selector: 'kw-api-ctrl-api',
	template: `<br>`,
})
export class kwApiCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwApiApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwApiCtrlApi::constructor() called");
	}
}
