// @formatter:off
import { Component }            from '@angular/core';

import { kwNgCtrlView }         from "@kwNgClass/kwNgCtrlView";
import { kwViewsList }          from "@kwNgState/views/kwViewsList";

import { itkGuestView }          from "./itkGuestView";

// @formatter:off


const sSTATE: string = "guest";


@Component({
	selector: 'itk-guest-ctrl-view',
	template: `<br>`,
})
export class itkGuestCtrlView extends kwNgCtrlView
{
	constructor(
		srvcView: itkGuestView,
		srvcViews:  kwViewsList)
	{
		super(srvcView, srvcViews, sSTATE);
		//console.log("itkGuestCtrlView ::constructor() called");
	}
}
