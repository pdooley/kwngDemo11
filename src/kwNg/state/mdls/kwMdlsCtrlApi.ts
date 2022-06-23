/**********************************************************************
 *
 * kwNg/ctrl/mdls/kwMdlsCtrlApi.ts
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

import { kwBSApisList }     from "@kwNgBS/apis/kwBSApisList";
import { kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";

import { kwMdlsApi }        from "./kwMdlsApi";

//@formatter:off


const sSTATE: string = "mdls";


@Component({
	selector: 'kw-mdls-ctrl-api',
	template: `<br>`,
})
export class kwMdlsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwMdlsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwMdlsCtrlApi::constructor() called");
	}
}
