/**********************************************************************
 *
 * kwNg/ctrl/actTags/kwActTagsCtrlApi.ts
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

import { Component }                from '@angular/core';

import { kwApisList }               from "@kwNgState/apis/kwApisList";
import { kwNgCtrlApi }              from "@kwNgClass/kwNgCtrlApi";

import { kwActTagsApi }             from "./kwActTagsApi";
//@formatter:off


const sSTATE: string = "activityTags";


@Component({
	selector: 'kw-act-tags-ctrl-api',
	template: `<br>`,
})
export class kwActTagsCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwActTagsApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwActTagsCtrlApi::constructor() called");
	}
}
