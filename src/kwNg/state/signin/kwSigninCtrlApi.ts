/**********************************************************************
 *
 * kwNg/ctrl/signin/kwSigninCtrlApi.ts
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

import { kwSigninApi }     from "./kwSigninApi";
//@formatter:off


const sSTATE: string = "signin";


@Component({
	selector: 'kw-signin-ctrl-api',
	template: `<br>`,
})
export class kwSigninCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSigninApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSigninCtrlApi::constructor() called");
	}
}
