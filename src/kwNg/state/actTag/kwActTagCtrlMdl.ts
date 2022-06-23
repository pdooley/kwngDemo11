/**********************************************************************
 *
 * kwNg/ctrl/actTag/kwActTagCtrlMdl.ts
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

import { Component }        from '@angular/core';

import { kwBSCurrsMap }     from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }     from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }       from "@kwNgBS/TZs/kwBSTZsMap";
import { kwMdlsList }       from "@kwNgState/mdls/kwMdlsList";
import { kwNgCtrlMdl }      from "@kwNgClass/kwNgCtrlMdl";

import { kwActTagMdl }      from "./kwActTagMdl";

//@formatter:off


const sSTATE: string = "activityTag";


@Component({
	selector: 'kw-act-tag-ctrl-mdl',
	template: `<br>`,
})
export class kwActTagCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwActTagMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwActTagCtrlMdl::constructor() called");
	}
}
