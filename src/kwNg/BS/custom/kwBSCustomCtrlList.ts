/**********************************************************************
 *
 * kwNg/BS/custom/kwBSCustomCtrlList.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 kWunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component }            from "@angular/core";

import {kwHttpMsg }            from "@kwNgHttp/kwHttpMsg";
import {kwNgCtrlDataList }     from "@kwNgClass/kwNgCtrlDataList";

import {kwBSCustomMsg }        from "./kwBSCustomMsg";
import {kwBSCustomList }       from "./kwBSCustomList";
//@formatter:on


@Component({
	selector: 'kw-bootstrap-custom-ctrl-list',
	template: `<br>`,
})
export class kwBSCustomCtrlList extends kwNgCtrlDataList
{
	constructor(
		srvcMsg: kwBSCustomMsg,
		srvcData: kwBSCustomList,
		srvcHttp: kwHttpMsg )
	{
		super(srvcMsg, srvcData, srvcHttp)
		//console.log("kwAccCtrlList::constructor() called");
	}}
