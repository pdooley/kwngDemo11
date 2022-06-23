//@formatter:off
import {Component}      from '@angular/core';

import {kwApisList}     from "@kwNgState/apis/kwApisList";
import {kwNgCtrlApi}    from "@kwNgClass/kwNgCtrlApi";

import {kwSigninLinkedInApi}    from "./kwSigninLinkedInApi";
//@formatter:off


const sSTATE: string = "notisFltr";


@Component({
	selector: 'dl-notis-fltr--ctrl-api',
	template: `<br>`,
})
export class kwSigninLinkedInCtrlApi extends kwNgCtrlApi
{
	constructor(
		srvcSrc: kwApisList,
		srvcDst: kwSigninLinkedInApi )
	{
		super(srvcSrc, srvcDst, sSTATE);
		//console.log("kwSigninLinkedInCtrlApi::constructor() called");
	}
}
