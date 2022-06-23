/**********************************************************************
 *
 * kwNg/ctrl/signin/kwSigninCtrlMdl.ts
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

import { kwSigninMdl }         from "./kwSigninMdl";

//@formatter:off


const sSTATE: string = "signin";


@Component({
	selector: 'kw-signin-ctrl-mdl',
	template: `<br>`,
})
export class kwSigninCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSigninMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSigninCtrlMdl::constructor() called");
	}
}
