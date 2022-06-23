/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwRedirectCtrlMdl.ts
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

import { kwMdlsList }        from "@kwNgState/mdls/kwMdlsList";
import { kwBSCurrsMap }     from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }     from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }       from "@kwNgBS/TZs/kwBSTZsMap";
import { kwNgCtrlMdl }      from "@kwNgClass/kwNgCtrlMdl";

import { kwRedirectMdl }    from "./kwRedirectMdl";

//@formatter:off


const sSTATE: string = "redirect";


@Component({
	selector: 'kw-redirect-ctrl-mdl',
	template: `<br>`,
})
export class kwRedirectCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwRedirectMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwRedirectCtrlMdl::constructor() called");
	}
}
