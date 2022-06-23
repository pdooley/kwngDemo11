/**********************************************************************
 *
 * kwNg/BS/srvc/kwBSSrvcCtrlSrvc.ts
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

import {kwBSSrvcMdl }      from "./kwBSSrvcMdl";

//@formatter:off


const sSTATE: string = "srvc";


@Component({
	selector: 'kw-bootstrap-srvc-ctrl-srvc',
	template: `<br>`,
})
export class kwBSSrvcCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcSrvc: kwBSSrvcMdl,
		srvcSrvcs: kwBSMdlsList )
	{
		super(srvcSrvc, srvcSrvcs, sSTATE);
		//console.log("kwBSSrvcCtrlSrvc::constructor() called");
	}
}
