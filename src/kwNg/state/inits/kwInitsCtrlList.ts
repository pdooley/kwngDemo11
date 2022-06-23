/**********************************************************************
 *
 * kwNg/ctrl/inits/kwInitsCtrlList.ts
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

import { kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import { kwInitsMsg }           from "./kwInitsMsg";
import { kwInitsList }          from "./kwInitsList";

//@formatter:on


@Component({
	selector: 'kw-inits-ctrl-list',
	template: `<br>`,
})
export class kwInitsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwInitsMsg,
	                srvcData: kwInitsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwInitsHttp::constructor() called");
	}

}
