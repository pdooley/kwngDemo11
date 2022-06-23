/**********************************************************************
 *
 * kwNg/BS/token/kwBSTokenCtrlMdl.ts
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

import {kwBSTokenMdl }     from "./kwBSTokenMdl";

//@formatter:off


const sSTATE: string = "token";


@Component({
	selector: 'kw-bootstrap-token-ctrl-mdl',
	template: `<br>`,
})
export class kwBSTokenCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSTokenMdl,
		srvcdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcdls, sSTATE);
		//console.log("kwBSTokenCtrlMdl::constructor() called");
	}
}
