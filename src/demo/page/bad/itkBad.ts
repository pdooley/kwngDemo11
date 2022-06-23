/**********************************************************************
 *
 * app/comp/bad/itkBadComp.ts
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
import { Component }						from '@angular/core';
import { FormControl }						from '@angular/forms';
import { FormGroup }						from '@angular/forms';
import { MatDialogRef }						from "@angular/material";
import { OnInit }							from '@angular/core';

import { kw }                               from "@kw/kw";
import { kwMetricMsg }                      from "@kwNgState/metric/kwMetricMsg";
import { kwMetricMsgFcty }                  from "@kwNgState/metric/kwMetricMsgFcty";
import { kwMetricType }                     from "@kwClass/metric/kwMetricType";
import { kwMsg }                            from "@kwClass/msg/kwMsg";
import { kwNgCtrlPage }	                    from '@kwNgClass/kwNgCtrlPage';
import { kwStDataList }                     from "@kwState/kwStDataList";

import { itkBadView}	                    from '@itkState/bad/itkBadView';

import { itkCritType }                      from "@itkClass/crit/itkCritType";
import { itkRespMsg }                       from "@itkState/resp/itkRespMsg";
import { itkRespMsgFcty }                   from "@itkState/resp/itkRespMsgFcty";
import { itkRespType }                      from "@itkClass/resp/itkRespType";
// @formatter:on


const sMETRIC = "STEP_ONE_BAD";


@Component({
	selector: 'itk-bad',
	templateUrl: './itkBadComp.html',
	styleUrls: [ './itkBadComp.css' ]
})
export class itkBadComp extends kwNgCtrlPage implements OnInit
{

	crit: itkCritType;
	guest: object;

	contactGroup: FormGroup;
	optionGroup: FormGroup;
	textGroup: FormGroup;

	constructor(    private dlgRef: MatDialogRef<kwDlg>,
	                private srvcCrit: kwStDataList,
					private srvcDlg: kwDlgStateData,
					private srvcGuest: kwStDataList,
					private srvcMetricMsg: kwMetricMsg,
					private srvcMetricMsgFcty: kwMetricMsgFcty,
					private srvcRespMsg: itkRespMsg,
					private srvcRespMsgFcty: itkRespMsgFcty,
	                srvcView: itkBadView    )
	{
		super(srvcView);
		//console.log("itkBadComp::constructor() called.");
	}

	ngOnInit(): void
	{
		//console.log("itkBadComp::ngOnInit() called.");

		//console.info("itkBadComp::ngOnInit() page is[", this.page, "].");

		this.srvcDlg.change(this.page);
		this.send();

		this.retrieveGuest();
		this.retrieveCrit();

		this.optionGroup = new FormGroup({
			id: new FormControl()
		});

		this.textGroup = new FormGroup({
			issue: new FormControl()
		});

		this.contactGroup = new FormGroup({
			phone: new FormControl(),
			email: new FormControl(),
		});
	}

	onCancel(): void
	{
		//console.log("itkBadComp::onCancel() called.");

		let data: kwMetricType = { sButton: sMETRIC	};

		let msg: kwMsg = this.srvcMetricMsgFcty.add(data, []);
		if( !kwMsg.is(msg) )
		{
			console.error("itkBadComp::onCancel() error creating msg.");
			return;
		}
		//console.info("itkBadComp::onCancel() msg is [", msg, "]");

		this.srvcMetricMsg.change(msg);

		this.dlgRef.close();
	}

	onSubmit(): void
	{
		//console.log("itkBadComp::onSubmit() called.");

		let value = this.textGroup.value;
		if( !value )
		{
			console.error("itkBadComp::onSubmit() value is invalid.");
			return;
		}
		//console.info("itkBadComp::onSubmit() value is [", value, "]");

		let sIssue = value.issue;
		if( !sIssue )
		{
			console.error("itkBadComp::onSubmit() sIssue is invalid.");
			return;
		}
		//console.info("itkBadComp::onSubmit() sIssue is [", sIssue, "]");

		let data: itkRespType = {
			sResp: sIssue,
/*			GuestPhone: this.guest["sPhone"],
			GuestEmail: this.guest["sEmail"],
			GuestRoom: this.guest["sRoom"],
			GuestFirst: this.guest["sNameFirst"],
			GuestLast: this.guest["sNameLast"],
*/			sEmails: "",
			nTime: 35
		};

		//console.info("itkBadComp::onSubmit() resp is [", resp, "]");

		let msg: kwMsg = this.srvcRespMsgFcty.add(data, []);
		if( !kwMsg.is(msg) )
		{
			console.error("itkBadComp::onSubmit() error creating msg.");
			return;
		}
		//console.info("itkBadComp::onSubmit() msg is [", msg, "]");

		this.srvcRespMsg.change(msg);

		this.dlgRef.close();
	}

	retrieveCrit(): void
	{
		//console.log("itkBadComp::retrieveCrit() called.");

		if (kw.isNull(this.srvcCrit))
		{
			console.error("itkBadComp::retrieveCrit() srvcCrit is invalid.");
			return;
		}

		this.crit = <itkCritType>this.srvcCrit.getFirst();
	}

	retrieveGuest(): void
	{
		//console.log("itkBadComp::retrieveGuest() called.");

		let guest = this.srvcGuest.get();
		if( !guest )
		{
			console.error("itkBadComp::retrieveGuest() guest is invalid.");
			return;
		}
		//console.info("itkBadComp::retrieveGuest() guest is [", guest, "]");

		this.guest = guest;
	}

	send(): void
	{
		//console.log("itkBadComp::send() called.");

		let data: kwMetricType = {
			sButton: sMETRIC
		};

		let msg: kwMsg = this.srvcMetricMsgFcty.add(data, []);
		if( !kwMsg.is(msg) )
		{
			console.error("itkBadComp::send() error creating msg.");
			return;
		}
		//console.info("itkBadComp::send() msg is [", msg, "]");

		this.srvcMetricMsg.change(msg);
	}


}
