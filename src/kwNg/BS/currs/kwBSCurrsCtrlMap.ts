/**********************************************************************
 *
 * kwNg/BS/currs/kwBSCurrsCtrlMap.ts
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
import {Component }        from "@angular/core";

import {kwBSCurrsMsg }     from "./kwBSCurrsMsg";
import {kwBSCurrsMap }     from "./kwBSCurrsMap";
import {kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataMap }  from "@kwNgClass/kwNgCtrlDataMap";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-currs-ctrl-map',
	template: `<br>`,
})
export class kwBSCurrsCtrlMap extends kwNgCtrlDataMap
{
	constructor(    srvcMsg: kwBSCurrsMsg,
	                srvcData: kwBSCurrsMap,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSCurrsCtrlMap::constructor() called");
	}
}
