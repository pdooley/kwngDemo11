/**********************************************************************
 *
 * itk/srvc/crit/itkCritCtrlMdl.ts
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

import { itkCritMdl }       from "./itkCritMdl";
// @formatter:off


const sSTATE: string = "critique";


@Component({
	selector: 'itk-crit-ctrl-mdl',
	template: `<br>`,
})
export class itkCritCtrlMdl extends kwNgCtrlMdl
{
	constructor(
		srvcMdl: itkCritMdl,
		srvcMdls: kwMdlsVal,
		currs: kwBSCurrsMap,
		langs: kwBSLangsMap ,
		tZs: kwBSTZsMap   )
	{
		super(srvcMdl, srvcMdls, sSTATE, currs, langs, tZs  );
		//console.log("itkCritCtrlMdl::constructor() called");
	}
}
