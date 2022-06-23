/**********************************************************************
 *
 * itk/srvc/guest/itkGuestCtrlMdl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }        from '@angular/core';

import { kwBSCurrsMap }     from "../../../kwNg/BS/currs/kwBSCurrsMap";
import { kwBSLangsMap }     from "../../../kwNg/BS/langs/kwBSLangsMap";
import { kwMdlsVal }        from "../../../kwNg/state/mdls/kwMdlsVal";
import { kwNgCtrlMdl }      from "../../../kwNg/state/kwNgCtrlMdl";
import { kwBSTZsMap }       from "../../../kwNg/BS/TZs/kwBSTZsMap";

import { itkGuestMdl }      from "../../state/guest/itkGuestMdl";
// @formatter:off


const sSTATE: string = "guest";


@Component({
	selector: 'itk-guest-ctrl-mdl',
	template: `<br>`,
})
export class itkGuestCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: itkGuestMdl,
		srvcMdls: kwMdlsVal,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwAccCtrlMdl::constructor() called");
	}
}
