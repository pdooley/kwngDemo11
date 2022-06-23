/**********************************************************************
 *
 * kwNg/main/langs/kwBSLangsCtrlMap.ts
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

import {kwBSLangsMsg }     from "./kwBSLangsMsg";
import {kwBSLangsMap }     from "./kwBSLangsMap";
import {kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataMap }  from "@kwNgClass/kwNgCtrlDataMap";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-langs-ctrl-map',
	template: `<br>`,
})
export class kwBSLangsCtrlMap extends kwNgCtrlDataMap
{
	constructor(    srvcMsg: kwBSLangsMsg,
	                srvcData: kwBSLangsMap,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwBSLangsCtrlMap::constructor() called");
	}
}
