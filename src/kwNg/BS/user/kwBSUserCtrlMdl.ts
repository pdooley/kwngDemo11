/**********************************************************************
 *
 * kwNg/ctrl/User/kwBSUserCtrlMdl.ts
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

import {kwBSUserMdl }      from "./kwBSUserMdl";

//@formatter:off


const sSTATE: string = "timezone";


@Component({
	selector: 'kw-bootstrap-user-ctrl-mdl',
	template: `<br>`,
})
export class kwBSUserCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSUserMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSUserCtrlMdl::constructor() called");
	}
}
