/**********************************************************************
 *
 * kwNg/main/signin/kwSigninCtrlList.ts
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
import { Component }        from "@angular/core";

import { kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";
import { kwNgCtrlDataList } from "@kwNgClass/kwNgCtrlDataList";

import { kwSigninMsg }         from "./kwSigninMsg";
import { kwSigninList }        from "./kwSigninList";

//@formatter:on


@Component({
	selector: 'kw-signin-ctrl-list',
	template: `<br>`,
})
export class kwSigninCtrlList extends kwNgCtrlDataList
{
	constructor(
		srvcMsg: kwSigninMsg,
	    srvcData: kwSigninList,
	    srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwSigninCtrlList::constructor() called");
	}
}
