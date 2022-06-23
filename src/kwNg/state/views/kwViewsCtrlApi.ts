/**********************************************************************
 *
 * kwNg/ctrl/Views/kwViewsCtrlApi.ts
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

import { kwViewsApi }       from "./kwViewsApi";

//@formatter:off


const sSTATE: string = "views";


@Component({
	selector: 'kw-views-ctrl-api',
	template: `<br>`,
})
export class kwViewsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSApisList,
		srvcDst: kwViewsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwViewsCtrlApi::constructor() called");
	}
}
