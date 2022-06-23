/**********************************************************************
 *
 * kwNg/BS/curr/kwBSCurrCtrlMdl.ts
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

import {kwBSCurrMdl }      from "./kwBSCurrMdl";
import {kwBSMdlsList }     from "@kwNgBS/mdls/kwBSMdlsList";
import {kwNgBSCtrlMdl }    from "@kwNgClass/kwNgBSCtrlMdl";
//@formatter:off


const sSTATE: string = "currency";


@Component({
	selector: 'kw-bootstrap-curr-ctrl-mdl',
	template: `<br>`,
})
export class kwBSCurrCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSCurrMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSCurrCtrlMdl::constructor() called");
	}
}
