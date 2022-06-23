/**********************************************************************
 *
 * kwNgView/ctrl/signin/kwSigninCtrlView.ts
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

import { Component }         from '@angular/core';

import { kwViewsList }       from "@kwNgState/views/kwViewsList";
import { kwNgCtrlSt }		 from "@kwNgClass/kwNgCtrlSt";

import { kwSigninView }      from "./kwSigninView";
//@formatter:off


const sSTATE: string = "signin";


@Component({
	selector: 'kw-signin-ctrl-view',
	template: `<br>`,
})
export class kwSigninCtrlView extends kwNgCtrlSt
{
	constructor(
		srvcSrc:  kwViewsList,
		srvcDst:  kwSigninView	)
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSigninCtrlView::constructor() called");
	}
}
