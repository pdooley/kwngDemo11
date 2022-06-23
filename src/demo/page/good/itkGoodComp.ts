/**********************************************************************
 *
 * app/comp/good/itkGoodComp.ts
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
import { MatDialogRef }			from "@angular/material";
import { OnInit }				from '@angular/core';

import { kwDlg }                from "../../../kwNgDlg/asset/kwDlg";
import { kwDlgStateData }		from '../../../kwNgDlg/state/kwDlgStateData';
import { kwViewType }			from '../../../kwDlg/class/view/kwViewType';
import { kwViewTitleType }		from '../../../kwDlg/class/viewTitle/kwViewTitleType';
import { kwMetricMsg }          from "../../../kwNg/state/metric/kwMetricMsg";
import { kwMetricMsgFcty }      from "../../../kwNg/state/metric/kwMetricMsgFcty";
import { kwMetricType }         from "@kwClass/metric/kwMetricType";
import { kwMsg }                from "@kwClass/msg/kwMsg";

import { itkOptionEmailType }	from '../../type/itkOptionEmailType';
import { itkOptionReviewType }	from '../../type/itkOptionReviewType';
// @formatter:on

const DLG_TITLE: kwViewTitleType = {
	title: {
		sFirst: "NICE WE LIKE TO HEAR THAT!",
		sSecond: "Care to leave a review?",
		nHeight: 35,
	},
	sImage: "/fairmont.jpg",
	logo: {
		sUrl: "/Fairmont_Logo.gif"
	},
	bIsXVisible: true,
	sUrl: "/great"
};


const DLG: kwViewType = {
	title: DLG_TITLE,
};

const INFO_LEFT: itkOptionReviewType = {
	title: {
		sFirst: "Ok",
		sSecond: "We will redirect you to TripAdvisor's form.",
		sThird: "",
		nHeight: 50
	},
	link: {
		sUrl: "/great",
		sIcon: "check_circle",
	},
};

const INFO_RIGHT: itkOptionEmailType = {
	title: {
		sFirst: "No thanks",
		sSecond: "We will send a review form after your stay.",
		sThird: "",
		nHeight: 50
	},
	email: {
		sHint: "e.g. Harry@gmail.com",
		sPlaceHolder: "Your E-mail address"
	},
};

const sTA: string = "https://static.tacdn.com/"
	+ "UserReview-g155004-d4852931-m29834-Dandy_Brisket-Ottawa_Ontario.html";

const sMETRIC               = "STEP_ONE_GOOD";
const sMETRIC_CANCELLED     = "STEP_ONE_GOOD_CANCELLED";


@Component({
	selector: 'app-great',
	templateUrl: './itkGoodComp.html',
	styleUrls: [ './itkGoodComp.css' ]
})
export class itkGoodComp implements OnInit
{

	dlg: kwViewType = DLG;
	infoLeft: itkOptionReviewType = INFO_LEFT;
	infoRight: itkOptionEmailType = INFO_RIGHT;

	constructor(    private srvcDlg: kwDlgStateData,
					private srvcMsg: kwMetricMsg,
					private srvcMsgFcty: kwMetricMsgFcty,
					private dlgRef: MatDialogRef<kwDlg>)
	{
		//console.log("itkGoodComp::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("itkGoodComp::ngOnInit() called.");

		this.srvcDlg.change(this.dlg);

		this.send();
	}

	onCancel(): void
	{
		//console.log("itkGoodComp::onCancel() called.");

		let	data: kwMetricType =  {
			sButton: sMETRIC_CANCELLED
		}

		let msg: kwMsg = this.srvcMsgFcty.add(data, []);
		if( !kwMsg.is(msg) )
		{
			console.error("itkBadComp::onCancel() error creating msg.");
			return;
		}
		//console.info("itkBadComp::onCancel() msg is [", msg, "]");

		this.srvcMsg.change(msg);

		this.dlgRef.close();
	}

	onSubmit(): void
	{
		//console.log("itkGoodComp::onSubmit() called.");

		window.open(sTA);

		this.dlgRef.close();
	}

	send(): void
	{
		//console.log("itkGoodComp::send() called.");

		let	data: kwMetricType =  {
			sButton: sMETRIC
		};

		let msg: kwMsg = this.srvcMsgFcty.add(data, []);
		if( !kwMsg.is(msg) )
		{
			console.error("itkGoodComp::send() error creating msg.");
			return;
		}
		//console.info("itkGoodComp::send() msg is [", msg, "]");

		this.srvcMsg.change(msg);
	}

}
