/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccCtrlApi.ts
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

import { kwAccApi }     from "./kwAccApi";

//@formatter:off


const sSTATE: string = "account";


@Component({
	selector: 'kw-acc-ctrl-api',
	template: `<br>`,
})
export class kwAccCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwAccApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwAccCtrlApi::constructor() called");
	}
}
