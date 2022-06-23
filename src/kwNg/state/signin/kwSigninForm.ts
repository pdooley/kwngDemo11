/**********************************************************************
 *
 * kwNg/ctrl/signin/kwSigninForm.ts
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

import { kw }                   from "@kw/kw";
import { kwBSCurrsMap }         from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }         from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }           from "@kwNgBS/TZs/kwBSTZsMap";
import { kwNgCtrlFormFull }     from "@kwNgClass/kwNgCtrlFormFull";

import { kwSigninMdl }			    from './kwSigninMdl';
import { kwSigninMsg }             from "./kwSigninMsg";
import { kwSigninMsgFcty }         from "./kwSigninMsgFcty";

//@formatter:off


@Injectable()
export class kwSigninForm extends kwNgCtrlFormFull
{

	constructor(
		srvcMdl: kwSigninMdl,
	    srvcMsg: kwSigninMsg,
	    srvcFcty: kwSigninMsgFcty,
	    srvcCurrs: kwBSCurrsMap,
		srvcLangs: kwBSLangsMap,
		srvcTZs: kwBSTZsMap     )
	{
		super(srvcMdl, srvcMsg, srvcFcty, srvcCurrs, srvcLangs, srvcTZs);
		//console.log("kwSigninForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwSigninForm::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwSigninForm::loadRec() obj is invalid");
			return;
		}

		const record = kw.clone(obj);
		if (kw.isNull(record))
		{
			console.error("kwSigninForm::load() record is invalid");
			return;
		}

		const currencies = this.srvcCurrs.get();
		if (kw.isNull(currencies))
		{
			console.error("kwSigninForm::load() currencies is invalid");
			return;
		}
		//console.info("kwSigninForm::formLoad() currencies is", currencies);
		record.currencies = currencies;

		const languages = this.srvcLangs.get();
		if (kw.isNull(languages))
		{
			console.error("kwSigninForm::load() languages is invalid");
			return;
		}
		//console.info("kwSigninForm::formLoad() languages is", languages);
		record.languages = languages;

		const timeZones = this.srvcTZs.get();
		if (kw.isNull(timeZones))
		{
			console.error("kwSigninForm::load() timeZones is invalid");
			return;
		}
		//console.info("kwSigninForm::load() timeZones is", timeZones);
		record.timeZones = timeZones;

		return record;
	}

}




