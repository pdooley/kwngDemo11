/**********************************************************************
 *
 * kwNg/ctrl/signup/kwSignupCtrlMdl.ts
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

import { kwSignupMdl }         from "./kwSignupMdl";

//@formatter:off


const sSTATE: string = "signup";


@Component({
	selector: 'kw-signup-ctrl-mdl',
	template: `<br>`,
})
export class kwSignupCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: kwSignupMdl,
		srvcMdls: kwMdlsList,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwSignupCtrlMdl::constructor() called");
	}
}
