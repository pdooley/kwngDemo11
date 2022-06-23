/**********************************************************************
 *
 * itk/main/guest/itkGuestCtrlList.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }            from "@angular/core";

import { kwHttpMsg }            from "../../../kwNg/http/kwHttpMsg";
import { kwNgCtrlDataList }     from "../../../kwNg/state/kwNgCtrlDataList";

import { itkGuestMsg }          from "../../state/guest/itkGuestMsg";
import { itkGuestList }         from "../../state/guest/itkGuestList";
// @formatter:on


@Component({
	selector: 'itk-guest-ctrl-list',
	template: `<br>`,
})
export class itkGuestCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: itkGuestMsg,
	                srvcData: itkGuestList,
					srvcHttp: kwHttpMsg)
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("itkGuestCtrlList::constructor() called");
	}
}
