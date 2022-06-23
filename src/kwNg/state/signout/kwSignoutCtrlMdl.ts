/**********************************************************************
 *
 * kwNg/ctrl/signout/kwSignoutCtrlMdl.ts
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

import { kwSignoutMdl }         from "./kwSignoutMdl";

//@formatter:off


const sSTATE: string = "signout";


@Component({
	selector: 'kw-signout-ctrl-mdl',
	template: `<br>`,
})
export class kwSignoutCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSignoutMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSignoutCtrlMdl::constructor() called");
	}
}
