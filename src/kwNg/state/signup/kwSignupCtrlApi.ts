/**********************************************************************
 *
 * kwNg/ctrl/signup/kwSignupCtrlApi.ts
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
import { Component }    from '@angular/core';

import { kwApisList }   from "@kwNgState/apis/kwApisList";
import { kwNgCtrlApi }  from "@kwNgClass/kwNgCtrlApi";

import { kwSignupApi }     from "./kwSignupApi";
//@formatter:off


const sSTATE: string = "signup";


@Component({
	selector: 'kw-signup-ctrl-api',
	template: `<br>`,
})
export class kwSignupCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSignupApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSignupCtrlApi::constructor() called");
	}
}
