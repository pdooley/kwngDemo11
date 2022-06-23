/**********************************************************************
 *
 * kwNg/ctrl/TZ/kwBSTZCtrlMdl.ts
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

import {kwBSTZMdl }        from "./kwBSTZMdl";

//@formatter:off


const sSTATE: string = "timezone";


@Component({
	selector: 'kw-bootstrap-timezone-ctrl-mdl',
	template: `<br>`,
})
export class kwBSTZCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSTZMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSTZCtrlMdl::constructor() called");
	}
}
