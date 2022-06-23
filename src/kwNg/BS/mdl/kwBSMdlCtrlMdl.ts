/**********************************************************************
 *
 * kwNg/BS/mdl/kwBSMdlCtrlMdl.ts
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

import {kwBSMdlMdl }      from "./kwBSMdlMdl";
import {kwBSMdlsList }     from "@kwNgBS/mdls/kwBSMdlsList";
import {kwNgBSCtrlMdl }    from "@kwNgClass/kwNgBSCtrlMdl";
//@formatter:off


const sSTATE: string = "mdl";


@Component({
	selector: 'kw-bootstrap-mdl-ctrl-mdl',
	template: `<br>`,
})
export class kwBSMdlCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSMdlMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSMdlCtrlMdl::constructor() called");
	}
}
