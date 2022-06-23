/**********************************************************************
 *
 * kwNg/ctrl/TZs/kwBSTZsCtrlMap.ts
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
import {Component }            from '@angular/core';

import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataMap }      from "@kwNgClass/kwNgCtrlDataMap";

import {kwBSTZsMap }           from "./kwBSTZsMap";
import {kwBSTZsMsg }           from "./kwBSTZsMsg";

//@formatter:on


@Component({
	selector: 'kw-bootstrap-timezones-ctrl-map',
	template: `<br>`,
})
export class kwBSTZsCtrlMap extends kwNgCtrlDataMap
{
	constructor(    srvcMsg: kwBSTZsMsg,
	                srvcData: kwBSTZsMap,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSTZsHttp::constructor() called");
	}
}
