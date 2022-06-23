/**********************************************************************
 *
 * kw/ctrl/kwCtrlHttp.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import { kw }               from '../kw';
import { kwMsg }            from "@kwClass/msg/kwMsg";

import { kwCtrlData }       from "./kwCtrlData";
import { kwHttpMsg }        from "../../kwNg/http/kwHttpMsg";
import { kwStDataMap }      from "@kwState/kwStDataMap";
import { kwStMsg }          from "@kwState/kwStMsg";
//@formatter:on

export abstract class kwCtrlDataMap extends kwCtrlData
{

	public constructor(
		srvcSrc: kwStMsg,
	    srvcDst: kwStDataMap,
		private srvcHttp: kwHttpMsg )
	{
		super(srvcSrc, srvcDst);
		//console.log(this.sClass, "::constructor() called");
	}

	protected execute(msg: kwMsg): void
	{
		//console.log(this.sClass, "::execute() called");

		if (!kwMsg.is(msg))
		{
			console.error(this.sClass, "::execute() msg is invalid.");
			return;
		}

		if (!kwStDataMap.is(this.srvcDst))
		{
			console.error(this.sClass, "::execute() srvcHttp is invalid.");
			return;
		}

		if (!kwHttpMsg.is(this.srvcHttp))
		{
			console.error(this.sClass, "::execute() srvcHttp is invalid.");
			return;
		}

		this.srvcHttp.single(msg)
			.subscribe(data => {
				//console.log(this.sClass, "::execute::subscribe() called");
				//console.log(this.sClass, "::execute::subscribe() data is", data);
				this.srvcDst.change(data);
			});
	}

	protected retrieveMsg(): kwStMsg
	{
		return <kwStMsg>this.srvcSrc;
	}

}
