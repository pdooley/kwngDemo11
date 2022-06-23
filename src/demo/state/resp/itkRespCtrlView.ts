// @formatter:off
import { Component }            from '@angular/core';

import { kwNgCtrlView }         from "@kwNgClass/kwNgCtrlView";
import { kwViewsList }          from "@kwNgState/views/kwViewsList";

import { itkRespView }          from "./itkRespView";

// @formatter:off


const sSTATE: string = "resp";


@Component({
	selector: 'itk-resp-ctrl-view',
	template: `<br>`,
})
export class itkRespCtrlView extends kwNgCtrlView
{
	constructor(
		srvcView: itkRespView,
		srvcViews:  kwViewsList)
	{
		super(srvcView, srvcViews, sSTATE);
		//console.log("itkRespCtrlView ::constructor() called");
	}
}
