/**********************************************************************
 *
 * kwNg/ctrl/signout/kwSignoutForm.ts
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

import { kwSignoutMdl }			    from './kwSignoutMdl';
import { kwSignoutMsg }             from "./kwSignoutMsg";
import { kwSignoutMsgFcty }         from "./kwSignoutMsgFcty";

//@formatter:off


@Injectable()
export class kwSignoutForm extends kwNgCtrlFormFull
{

	constructor(
		srvcMdl: kwSignoutMdl,
	    srvcMsg: kwSignoutMsg,
	    srvcFcty: kwSignoutMsgFcty,
	    srvcCurrs: kwBSCurrsMap,
		srvcLangs: kwBSLangsMap,
		srvcTZs: kwBSTZsMap     )
	{
		super(srvcMdl, srvcMsg, srvcFcty, srvcCurrs, srvcLangs, srvcTZs);
		//console.log("kwSignoutForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwSignoutForm::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwSignoutForm::loadRec() obj is invalid");
			return;
		}

		const record = kw.clone(obj);
		if (kw.isNull(record))
		{
			console.error("kwSignoutForm::load() record is invalid");
			return;
		}

		const currencies = this.srvcCurrs.get();
		if (kw.isNull(currencies))
		{
			console.error("kwSignoutForm::load() currencies is invalid");
			return;
		}
		//console.info("kwSignoutForm::formLoad() currencies is", currencies);
		record.currencies = currencies;

		const languages = this.srvcLangs.get();
		if (kw.isNull(languages))
		{
			console.error("kwSignoutForm::load() languages is invalid");
			return;
		}
		//console.info("kwSignoutForm::formLoad() languages is", languages);
		record.languages = languages;

		const timeZones = this.srvcTZs.get();
		if (kw.isNull(timeZones))
		{
			console.error("kwSignoutForm::load() timeZones is invalid");
			return;
		}
		//console.info("kwSignoutForm::load() timeZones is", timeZones);
		record.timeZones = timeZones;

		return record;
	}

}




