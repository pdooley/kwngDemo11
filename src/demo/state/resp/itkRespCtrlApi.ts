/**********************************************************************
 *
 * itk/srvc/resp/itkRespCtrlApi.ts
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

import { kwApisVal }       from "../../../kwNg/state/apis/kwApisVal";
import { kwNgCtrlApi }      from "../../../kwNg/state/kwNgCtrlApi";

import { itkRespApi }       from "./itkRespApi";
// @formatter:off


const sSTATE: string = "resp";


@Component({
	selector: 'itk-resp-ctrl-api',
	template: `<br>`,
})
export class itkRespCtrlApi extends kwNgCtrlApi
{
	constructor(	srvcSrc: kwApisVal,
					srvcDest: itkRespApi )
	{
		super(srvcSrc, srvcDest, sSTATE);
		//console.log("itkRespCtrlApi::constructor() called");
	}
}
