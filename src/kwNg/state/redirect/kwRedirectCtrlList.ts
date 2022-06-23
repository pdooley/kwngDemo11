/**********************************************************************
 *
 * kwNg/ctrl/redirect/kwRedirectCtrlList.ts
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
import { Component }            from '@angular/core';

import { kwHttpMsg }                from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }   from "@kwNgClass/kwNgCtrlDataList";

import { kwRedirectMsg }      from "./kwRedirectMsg";
import { kwRedirectList }      from "./kwRedirectList";

//@formatter:on


@Component({
	selector: 'kw-redirect-ctrl-list',
	template: `<br>`,
})
export class kwRedirectCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwRedirectMsg,
	                srvcData: kwRedirectList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwRedirectHttp::constructor() called");
	}
}
