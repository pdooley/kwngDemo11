/**********************************************************************
 *
 * kw/ctrl/kwCtrlDataList.ts
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
import { kwStDataList }     from "@kwState/kwStDataList";
import { kwStMsg }          from "@kwState/kwStMsg";

export class kwCtrlHttp extends kwCtrlData
{
	public constructor(
		srvcSrc: kwStMsg,
	    srvcDst: kwStDataList,
		private srvcHttp: kwHttpMsg )
	{
		super(srvcSrc, srvcDst);
		//console.log(this.sClass, "::constructor() called");
	}

	protected execute(msg: kwMsg): void
	{
		//console.log("kwCtrlDataList::execute() called");

		if (!kwMsg.is(msg))
		{
			console.error(this.sClass, "::execute() msg is invalid.");
			return;
		}

		if (!kwStDataList.is(this.srvcDst))
		{
			console.error(this.sClass, "::execute() srvcDst is invalid.");
			return;
		}

		if (!kwHttpMsg.is(this.srvcHttp))
		{
			console.error(this.sClass, "::execute() srvcHttp is invalid.");
			return;
		}

		this.srvcHttp.single(msg)
			.subscribe(data => {
				//console.log("kwCtrlDataList::execute::subscribe() called");
				//console.log("kwCtrlDataList::execute::subscribe() data is", data);
				this.srvcDst.change(data);
			});

	}

	protected retrieveMsg(): kwStMsg
	{
		return <kwStMsg>this.srvcSrc;
	}

}
