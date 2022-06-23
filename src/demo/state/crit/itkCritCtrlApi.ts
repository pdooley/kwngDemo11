/**********************************************************************
 *
 * itk/srvc/crit/itkCritCtrlApi.ts
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

import { itkCritApi }       from "./itkCritApi";
// @formatter:off


const sSTATE: string = "crit";


@Component({
	selector: 'itk-crit-ctrl-api',
	template: `<br>`,
})
export class itkCritCtrlApi extends kwNgCtrlApi
{
	constructor(	srvcSrc: kwApisVal,
					srvcDest: itkCritApi )
	{
		super(srvcSrc, srvcDest, sSTATE);
		//console.log("itkCritCtrlApi::constructor() called");
	}
}
