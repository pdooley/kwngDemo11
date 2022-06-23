// @formatter:off
import { Component }            from '@angular/core';

import { kwNgCtrlView }         from "@kwNgClass/kwNgCtrlView";
import { kwViewsList }          from "@kwNgState/views/kwViewsList";

import { itkCritView }          from "./itkCritView";

// @formatter:off


const sSTATE: string = "crit";


@Component({
	selector: 'itk-crit-ctrl-view',
	template: `<br>`,
})
export class itkCritCtrlView extends kwNgCtrlView
{
	constructor(
		srvcView: itkCritView,
		srvcViews:  kwViewsList)
	{
		super(srvcView, srvcViews, sSTATE);
		//console.log("itkCritCtrlView ::constructor() called");
	}
}
