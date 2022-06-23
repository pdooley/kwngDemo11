/**********************************************************************
 *
 * kwNg/ctrl/signout/kwSignoutCtrlApi.ts
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

import { kwSignoutApi }     from "./kwSignoutApi";
//@formatter:off


const sSTATE: string = "signout";


@Component({
	selector: 'kw-signout-ctrl-api',
	template: `<br>`,
})
export class kwSignoutCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSignoutApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSignoutCtrlApi::constructor() called");
	}
}
