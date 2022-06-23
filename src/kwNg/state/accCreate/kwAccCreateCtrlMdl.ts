/**********************************************************************
 *
 * kwNg/ctrl/accCreate/kwAccCreateCtrlMdl.ts
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

import { kwAccCreateMdl }   from "./kwAccCreateMdl";

//@formatter:off


const sSTATE: string = "accountCreate";


@Component({
	selector: 'kw-acc-create-ctrl-mdl',
	template: `<br>`,
})
export class kwAccCreateCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwAccCreateMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwAccCtrlMdl::constructor() called");
	}
}
