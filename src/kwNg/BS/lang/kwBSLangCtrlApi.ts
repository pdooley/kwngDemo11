/**********************************************************************
 *
 * kwNg/ctrl/lang/kwBSLangCtrlApi.ts
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
import {kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";

import {kwBSLangApi }      from "./kwBSLangApi";

//@formatter:off


const sSTATE: string = "language";


@Component({
	selector: 'kw-bootstrap-lang-ctrl-api',
	template: `<br>`,
})
export class kwBSLangCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwBSLangApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSLangCtrlApi::constructor() called");
	}
}
