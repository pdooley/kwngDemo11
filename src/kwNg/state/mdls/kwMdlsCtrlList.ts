/**********************************************************************
 *
 * kwNg/ctrl/views/kwMdlsCtrlList.ts
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

import { kwHttpMsg }           from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList }    from "@kwNgClass/kwNgCtrlDataList";

import { kwMdlsMsg }           from "./kwMdlsMsg";
import { kwMdlsList }         from "./kwMdlsList";
//@formatter:on


@Component({
	selector: 'kw-mdls-ctrl-list',
	template: `<br>`,
})
export class kwMdlsCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: kwMdlsMsg,
	                srvcData: kwMdlsList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwViewsHttp::constructor() called");
	}

}
