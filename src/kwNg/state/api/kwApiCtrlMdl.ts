/**********************************************************************
 *
 * kwNg/ctrl/api/kwApiCtrlMdl.ts
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

import { kwApiMdl }         from "./kwApiMdl";

//@formatter:off


const sSTATE: string = "api";


@Component({
	selector: 'kw-api-ctrl-mdl',
	template: `<br>`,
})
export class kwApiCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwApiMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwApiCtrlMdl::constructor() called");
	}
}
