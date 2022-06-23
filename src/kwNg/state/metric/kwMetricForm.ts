/**********************************************************************
 *
 * kwNg/ctrl/metric/kwMetricForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { Injectable }	            from '@angular/core';

import { kw }                   from "@kw/kw";
import { kwMetricMdl }          from '../../state/metric/kwMetricMdl';
import { kwMetricMsg }          from "../../state/metric/kwMetricMsg";
import { kwMetricMsgFcty }         from "../../state/metric/kwMetricMsgFcty";
import { kwNgCtrlFormSub }      from "@kwNgClass/kwNgCtrlFormSub";
//@formatter:off


@Injectable()
export class kwMetricForm extends kwNgCtrlFormSub
{
	constructor(
		srvcMdl: kwMetricMdl,
	    srvcMsg: kwMetricMsg,
	    srvcFcty: kwMetricMsgFcty	)
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log("kwMetricForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwMetricForm::loadRec() called.");
		return kw.clone(obj);
	}
}




