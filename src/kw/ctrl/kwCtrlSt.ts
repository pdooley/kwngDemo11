/**********************************************************************
 *
 * kw/ctrl/kwCtrlView.ts
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

import { kw }               from "@kw/kw";
import { kwStDataList }     from "@kwState/kwStDataList";
import { kwStDataVal }         from "@kwState/kwStDataVal";



export abstract class kwCtrlSt
{
	protected sClass: string = this.constructor.name;

	constructor(
		protected srvcSrc: kwStDataList,
		protected srvcDst: kwStDataVal,
		protected sState: string,  )
	{
		//console.log(this.sClass, "::constructor() called");
	}

//@formatter:on

	protected init(): boolean
	{
		console.log(this.sClass, "::init() called");

		return true;
	}

	protected load(): boolean
	{
		//console.log(this.sClass, "::load() called");

		if (!kw.isString(this.sState))
		{
			console.error(this.sClass, "::load() sState is invalid");
			return false;
		}
		//console.info(this.sClass, "::load() sState is ", this.sState);

		if (kw.isNull(this.srvcSrc))
		{
			console.error(this.sClass, "::load() srvcSrc for [", this.sState, "] is invalid");
			return false;
		}

		const data: object = this.srvcSrc.getFirst();
		if (kw.isNull(data))
		{
			console.error(this.sClass, "::load() data for [", this.sState, "] is invalid.");
			return false;
		}
		//console.info(this.sClass, "::load() data is ", data);

		const view: object = data[this.sState];
		if (kw.isNull(view))
		{
			console.error(this.sClass, "::load() view for [", this.sState, "] is not provided.");
			return false;
		}

		//console.info(this.sClass, "::load() view for [", this.sState, "] is [", view, "]");
		this.srvcDst.change(view);

	}


}
