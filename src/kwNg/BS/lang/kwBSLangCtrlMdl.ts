/**********************************************************************
 *
 * kwNg/ctrl/lang/kwBSLangCtrlMdl.ts
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

import {kwBSLangMdl }      from "./kwBSLangMdl";

//@formatter:off


const sSTATE: string = "language";


@Component({
	selector: 'kw-bootstrap-lang-ctrl-mdl',
	template: `<br>`,
})
export class kwBSLangCtrlMdl extends kwNgBSCtrlMdl
{
	constructor(
		srvcMdl: kwBSLangMdl,
		srvcMdls: kwBSMdlsList )
	{
		super(srvcMdl, srvcMdls, sSTATE);
		//console.log("kwBSLangCtrlMdl::constructor() called");
	}
}
