/**********************************************************************
 *
 * app/comp/end/itkEndComp.html
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

// @formatter:off
import { Component }            from '@angular/core';
import { OnInit }				from '@angular/core';

import { kwApp }                from "@kwClass/app/kwApp";
import { kwAppClose }           from "@kwClass/app/kwAppClose";
import { kwAppVal }             from "../../../kwNg/state/app/kwAppVal";
import { kwDlgStateData }       from "../../../kwNgDlg/state/kwDlgStateData";
import { kwViewTitleType }		from '../../../kwDlg/class/viewTitle/kwViewTitleType';
import { kwViewType }			from '../../../kwDlg/class/view/kwViewType';
// @formatter:on


const TITLE: kwViewTitleType = {
	title: {
		sFirst: "Thank you",
		sSecond: "Someone from this hotel will get back to you as soon as possible.",
		sThird: "We appreciate your input.",
		nHeight: 50
	},
	sImage: "/fairmont.jpg",
	logo: {
		sUrl: "/Fairmont_Logo.gif"
	},
	bIsXVisible: true,
	sUrl: "/thanks"
};

const VIEW: kwViewType = {
	title: TITLE
};

const sWISH = "Fairmont San Francisco wishes you happy travels!";


@Component({
	selector: 'app-thanks',
	templateUrl: './itkEndComp.html',
	styleUrls: [ './itkEndComp.css' ]
})
export class itkEndComp implements OnInit
{

	info: kwViewType = VIEW;
	sWish: string = sWISH;

	constructor(    private srvcApp: kwAppVal,
					private srvcDlg: kwDlgStateData )
	{
		//console.log("itkEndComp::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("itkEndComp::ngOnInit() called.");
		this.srvcDlg.change(this.info);
	}

	onClose(): void
	{
		//console.log("itkEndComp::onClose() called.");

		let app: kwApp = new kwAppClose();
		if (!app.init)
		{
			console.error("itkEndComp::onClose() error creating app.");
			return;
		}

		let data = [app];

		this.srvcApp.change(data);
	}

}

