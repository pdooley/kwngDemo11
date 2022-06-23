/**********************************************************************
 *
 * kwNg/ctrl/accCreate/kwAccCreateForm.ts
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
import { kwNgCtrlFormFull }     from "@kwNgClass/kwNgCtrlFormFull"

import { kwBSCurrsMap }         from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }         from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }           from "@kwNgBS/TZs/kwBSTZsMap";

import { kwAccCreateMdl }		from './kwAccCreateMdl';
import { kwAccCreateMsg }       from "./kwAccCreateMsg";
import { kwAccCreateMsgFcty }   from "./kwAccCreateMsgFcty";

//@formatter:off


@Injectable()
export class kwAccCreateForm extends kwNgCtrlFormFull
{

	constructor(
		srvcMdl: kwAccCreateMdl,
	    srvcMsg: kwAccCreateMsg,
	    srvcFcty: kwAccCreateMsgFcty,
	    srvcCurrs: kwBSCurrsMap,
		srvcLangs: kwBSLangsMap,
		srvcTZs: kwBSTZsMap     )
	{
		super(srvcMdl, srvcMsg, srvcFcty, srvcCurrs, srvcLangs, srvcTZs);
		//console.log("kwAccCreateForm::constructor() called.");
	}

	protected loadRec(obj: object): object
	{
		//console.log("kwAccCreateForm::loadRec() called.");

		if (kw.isNull(obj))
		{
			console.error("kwAccCreateForm::loadRec() obj is invalid");
			return;
		}

		const record = kw.clone(obj);
		if (kw.isNull(record))
		{
			console.error("kwAccCreateForm::load() record is invalid");
			return;
		}

		const currencies = this.srvcCurrs.get();
		if (kw.isNull(currencies))
		{
			console.error("kwAccCreateForm::load() currencies is invalid");
			return;
		}
		//console.info("kwAccCreateForm::formLoad() currencies is", currencies);
		record.currencies = currencies;

		const languages = this.srvcLangs.get();
		if (kw.isNull(languages))
		{
			console.error("kwAccCreateForm::load() languages is invalid");
			return;
		}
		//console.info("kwAccCreateForm::formLoad() languages is", languages);
		record.languages = languages;

		const timeZones = this.srvcTZs.get();
		if (kw.isNull(timeZones))
		{
			console.error("kwAccCreateForm::load() timeZones is invalid");
			return;
		}
		//console.info("kwAccCreateForm::load() timeZones is", timeZones);
		record.timeZones = timeZones;

		return record;
	}

}




