/**********************************************************************
 *
 * kwNg/ctrl/signup/kwSignupForm.ts
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
import { Injectable }	        from '@angular/core';

import { kw }                   from "@kw/kw"
import { kwBSCurrsMap }         from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }         from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }           from "@kwNgBS/TZs/kwBSTZsMap";
import { kwNgCtrlFormFull }     from "@kwNgClass/kwNgCtrlFormFull"

import { kwSignupMdl }			    from './kwSignupMdl';
import { kwSignupMsg }             from "./kwSignupMsg";
import { kwSignupMsgFcty }         from "./kwSignupMsgFcty";

//@formatter:off


@Injectable()
export class kwSignupForm extends kwNgCtrlFormFull
{

	constructor(
		srvcMdl: kwSignupMdl,
	    srvcMsg: kwSignupMsg,
	    srvcFcty: kwSignupMsgFcty,
	    srvcCurrs: kwBSCurrsMap,
		srvcLangs: kwBSLangsMap,
		srvcTZs: kwBSTZsMap     )
	{
		super(srvcMdl, srvcMsg, srvcFcty, srvcCurrs, srvcLangs, srvcTZs);
		//console.log("kwSignupForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwSignupForm::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwSignupForm::loadRec() obj is invalid");
			return;
		}

		const record = kw.clone(obj);
		if (kw.isNull(record))
		{
			console.error("kwSignupForm::load() record is invalid");
			return;
		}

		const currencies = this.srvcCurrs.get();
		if (kw.isNull(currencies))
		{
			console.error("kwSignupForm::load() currencies is invalid");
			return;
		}
		//console.info("kwSignupForm::formLoad() currencies is", currencies);
		record.currencies = currencies;

		const languages = this.srvcLangs.get();
		if (kw.isNull(languages))
		{
			console.error("kwSignupForm::load() languages is invalid");
			return;
		}
		//console.info("kwSignupForm::formLoad() languages is", languages);
		record.languages = languages;

		const timeZones = this.srvcTZs.get();
		if (kw.isNull(timeZones))
		{
			console.error("kwSignupForm::load() timeZones is invalid");
			return;
		}
		//console.info("kwSignupForm::load() timeZones is", timeZones);
		record.timeZones = timeZones;

		return record;
	}

}




