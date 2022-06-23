/**********************************************************************
 *
 * itk/srvc/resp/itkRespCtrlMdl.ts
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

import { itkRespMdl }       from "./itkRespMdl";
// @formatter:off


const sSTATE: string = "response";


@Component({
	selector: 'itk-resp-ctrl-mdl',
	template: `<br>`,
})
export class itkRespCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: itkRespMdl,
		srvcMdls: kwMdlsVal,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("kwAccCtrlMdl::constructor() called");
	}
}
