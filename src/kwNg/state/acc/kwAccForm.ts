/**********************************************************************
 *
 * kwNg/ctrl/acc/kwAccForm.ts
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

import { kwAccMdl }			    from './kwAccMdl';
import { kwAccMsg }             from "./kwAccMsg";
import { kwAccMsgFcty }         from "./kwAccMsgFcty";

//@formatter:off


@Injectable()
export class kwAccForm extends kwNgCtrlFormFull
{

	constructor(
		srvcMdl: kwAccMdl,
	    srvcMsg: kwAccMsg,
	    srvcFcty: kwAccMsgFcty,
	    srvcCurrs: kwBSCurrsMap,
		srvcLangs: kwBSLangsMap,
		srvcTZs: kwBSTZsMap     )
	{
		super(srvcMdl, srvcMsg, srvcFcty, srvcCurrs, srvcLangs, srvcTZs);
		//console.log("kwAccForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwAccForm::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwAccForm::loadRec() obj is invalid");
			return;
		}

		const record = kw.clone(obj);
		if (kw.isNull(record))
		{
			console.error("kwAccForm::load() record is invalid");
			return;
		}

		const currencies = this.srvcCurrs.get();
		if (kw.isNull(currencies))
		{
			console.error("kwAccForm::load() currencies is invalid");
			return;
		}
		//console.info("kwAccForm::formLoad() currencies is", currencies);
		record.currencies = currencies;

		const languages = this.srvcLangs.get();
		if (kw.isNull(languages))
		{
			console.error("kwAccForm::load() languages is invalid");
			return;
		}
		//console.info("kwAccForm::formLoad() languages is", languages);
		record.languages = languages;

		const timeZones = this.srvcTZs.get();
		if (kw.isNull(timeZones))
		{
			console.error("kwAccForm::load() timeZones is invalid");
			return;
		}
		//console.info("kwAccForm::load() timeZones is", timeZones);
		record.timeZones = timeZones;

		return record;
	}

}




