/**********************************************************************
 *
 * kwNg/ctrl/org/kwOrgCtrlApi.ts
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
import { kwOrgApi }        from "@kwNgState/org/kwOrgApi";
//@formatter:off


const sSTATE: string = "org";


@Component({
	selector: 'kw-org-ctrl-api',
	template: `<br>`,
})
export class kwOrgCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwOrgApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwOrgCtrlApi::constructor() called");
	}
}
