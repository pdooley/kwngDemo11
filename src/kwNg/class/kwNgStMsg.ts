/**********************************************************************
 *
 * kwNg/state/kwNgStMsg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { EventEmitter }     from '@angular/core';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwMsg }            from "@kwClass/msg/kwMsg";
import { kwStApi }          from "@kwState/kwStApi";
import { kwStMsg }          from "@kwState/kwStMsg";

//@formatter:off


export class kwNgStMsg extends kwStMsg
{
	private theSignal: EventEmitter<kwMsg>;
	public changed$: EventEmitter<kwMsg>;

	public constructor(
		srvcTrace: kwBSTraceVal,
		srvcApi: kwStApi        )
	{
		super(srvcTrace, srvcApi);

		//console.log(this.sClass, "::constructor() called.");
		this.theSignal = new EventEmitter<kwMsg>();
		this.changed$=this.theSignal;
	}

	protected broadcast(data: any): void
	{
		//console.log(this.sClass, "::broadcastMsg() called.");
		if (!kwMsg.is(data))
		{
			console.error(this.sClass, "::broadcast() data is invalid.");
			return;
		}
		this.theSignal.emit(data);
	}
}
