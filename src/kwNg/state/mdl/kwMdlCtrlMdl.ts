/**********************************************************************
 *
 * kwNg/ctrl/model/kwMdlCtrlMdl.ts
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
import { kwMdlsList }        from "@kwNgState/mdls/kwMdlsList";
import { kwNgCtrlMdl }      from "@kwNgClass/kwNgCtrlMdl";

import { kwMdlMdl }         from "./kwMdlMdl";

//@formatter:off


const sSTATE: string = "model";


@Component({
	selector: 'kw-mdl-ctrl-mdl',
	template: `<br>`,
})
export class kwMdlCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwMdlMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwMdlCtrlMdl::constructor() called");
	}
}
