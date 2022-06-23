//@formatter:off
import {Component}      from '@angular/core';

import {kwApisList}     from "@kwNgState/apis/kwApisList";
import {kwNgCtrlApi}    from "@kwNgClass/kwNgCtrlApi";

import {kwSigninLinkedInCBApi}    from "./kwSigninLinkedInCBApi";
//@formatter:off


const sSTATE: string = "notisFltr";


@Component({
	selector: 'dl-signin-linked-in-cb-ctrl-api',
	template: `<br>`,
})
export class kwSigninLinkedInCBCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSigninLinkedInCBApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSigninLinkedInCBCtrlApi::constructor() called");
	}
}
