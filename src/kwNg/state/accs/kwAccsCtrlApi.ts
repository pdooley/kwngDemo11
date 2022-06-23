/**********************************************************************
 *
 * kwNg/ctrl/accs/kwAccsCtrlApi.ts
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

import { kwAccsApi }                from "./kwAccsApi";

//@formatter:off


const sSTATE: string = "accounts";


@Component({
	selector: 'kw-accs-ctrl-api',
	template: `<br>`,
})
export class kwAccsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwAccsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwAccsCtrlApi::constructor() called");
	}
}
