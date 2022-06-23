/**********************************************************************
 *
 * kwNg/BS/api/kwBSApiCtrlMdl.ts
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

import {kwBSMdlsList }     from "@kwNgBS/mdls/kwBSMdlsList";
import {kwNgBSCtrlMdl }    from "@kwNgClass/kwNgBSCtrlMdl";

import {kwBSApiMdl }       from "./kwBSApiMdl";

//@formatter:off


const sSTATE: string = "api";


@Component({
	selector: 'kw-bootstrap-api-ctrl-mdl',
	template: `<br>`,
})
export class kwBSApiCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSApiMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSApiCtrlMdl::constructor() called");
	}
}
