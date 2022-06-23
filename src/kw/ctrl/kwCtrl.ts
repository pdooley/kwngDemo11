/**********************************************************************
 *
 * kw/ctrl/kwCtrl.ts
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
import { kwSt }     from "@kwState/kwSt";

export class kwCtrl
{
	protected sClass: string = this.constructor.name;

	public constructor(
		protected srvcSrc: kwSt,
		protected srvcDst: kwSt    )
	{
		//console.log(this.sClass, "::constructor() called");
	}

//@formatter:on

	public init(): boolean
	{
		//console.log(this.sClass, "::init() called");

		if (!kwSt.is(this.srvcDst))
		{
			//console.log(this.sClass, "::init() srvcDst is invalid");
			return false;
		}

		if (!kwSt.is(this.srvcSrc))
		{
			//console.log(this.sClass, "::init() srvcSrc is invalid");
			return false;
		}

		return true;
	}

	protected load(data: any): boolean
	{
		//console.log(this.sClass, "::load() called");

		if (!kwSt.is(this.srvcDst))
		{
			//console.log(this.sClass, "::init() srvcDst is invalid");
			return false;
		}

		this.srvcDst.change(data);

		return true;
	}

}
