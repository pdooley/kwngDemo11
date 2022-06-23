/**********************************************************************
 *
 * kwNg/ctrl/model/kwMdlCtrlApi.ts
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
import { Component }            from '@angular/core';

import { kwApisList }           from "@kwNgState/apis/kwApisList";
import { kwNgCtrlApi }      from "@kwNgClass/kwNgCtrlApi";

import { kwMdlApi }        from "./kwMdlApi";

//@formatter:off


const sSTATE: string = "model";


@Component({
	selector: 'kw-mdl-ctrl-api',
	template: `<br>`,
})
export class kwMdlCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwMdlApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwMdlCtrlApi::constructor() called");
	}
}
