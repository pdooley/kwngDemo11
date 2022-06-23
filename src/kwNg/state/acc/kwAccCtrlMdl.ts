/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccCtrlMdl.ts
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

import { kwAccMdl }         from "./kwAccMdl";

//@formatter:off


const sSTATE: string = "account";


@Component({
	selector: 'kw-acc-ctrl-mdl',
	template: `<br>`,
})
export class kwAccCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwAccMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwAccCtrlMdl::constructor() called");
	}
}
