/**********************************************************************
 *
 * itk/main/resp/itkRespCtrlList.ts
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

import { itkRespMsg }           from "./itkRespMsg";
import { itkRespList }          from "./itkRespList";
// @formatter:on


@Component({
	selector: 'itk-resp-ctrl-list',
	template: `<br>`,
})
export class itkRespCtrlList extends kwNgCtrlDataList
{
	constructor(    srvcMsg: itkRespMsg,
	                srvcData: itkRespList,
	                srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("itkRespCtrlList::constructor() called");
	}
}
