/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlFormFull.ts
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
import { kwBSCurrsMap }     from "@kwNgBS/currs/kwBSCurrsMap";
import { kwBSLangsMap }     from "@kwNgBS/langs/kwBSLangsMap";
import { kwBSTZsMap }       from "@kwNgBS/TZs/kwBSTZsMap";
import { kwStMsgFcty }        from "@kwState/kwStMsgFcty";
import { kwStDataMap }      from "@kwState/kwStDataMap";

import { kwNgCtrlForm }     from "./kwNgCtrlForm";
import { kwNgStMdl }        from "./kwNgStMdl";
import { kwNgStMsg }        from "./kwNgStMsg";

//@formatter:off


export abstract class kwNgCtrlFormFull extends kwNgCtrlForm
{
	constructor(
		srvcMdl: kwNgStMdl,
	    srvcMsg: kwNgStMsg,
	    srvcFcty: kwStMsgFcty,
		protected srvcCurrs: kwBSCurrsMap,
	    protected srvcLangs: kwBSLangsMap,
	    protected srvcTZs: kwBSTZsMap        )
	{
		super(srvcMdl, srvcMsg, srvcFcty);
		//console.log(this.sClass, "::constructor() called.");
	}

	public init(): boolean
	{
		//console.log(this.sClass, "::init() called.");
		if (!super.init())
		{
			console.error(this.sClass, "::init() error initializing parent.");
			return false;
		}

		if (!kwStDataMap.is(this.srvcCurrs))
		{
			console.error(this.sClass, "::createRec() srvcCurrs is invalid.");
			return false;
		}

		if (!kwStDataMap.is(this.srvcLangs))
		{
			console.error(this.sClass, "::createRec() srvcLangs is invalid.");
			return false;
		}

		if (!kwStDataMap.is(this.srvcTZs))
		{
			console.error(this.sClass, "::createRec() srvcTZs is invalid.");
			return false;
		}

		return true;
	}

}




