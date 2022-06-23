/**********************************************************************
 *
 * itk/srvc/guest/itkGuestCtrlApi.ts
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

import { itkGuestApi }      from "../../state/guest/itkGuestApi";
// @formatter:off


const sSTATE: string = "guest";


@Component({
	selector: 'itk-guest-ctrl-api',
	template: `<br>`,
})
export class itkGuestCtrlApi extends kwNgCtrlApi
{
	constructor(	srvcSrc: kwApisVal,
					srvcDest: itkGuestApi )
	{
		super(srvcSrc, srvcDest, sSTATE);
		//console.log("itkGuestCtrlApi::constructor() called");
	}
}
