/**********************************************************************
 *
 * kwNg/ctrl/TZ/kwBSTZCtrlApi.ts
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

import {kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";

import {kwBSTZApi }        from "./kwBSTZApi";
import {kwBSTZList }       from "./kwBSTZList";

//@formatter:off


const sSTATE: string = "timezone";


@Component({
	selector: 'kw-bootstrap-timezone-ctrl-api',
	template: `<br>`,
})
export class kwBSTZCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwBSTZList,
		srvcDst: kwBSTZApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwBSTZCtrlApi::constructor() called");
	}
}
