/**********************************************************************
 *
 * kw/class/status/kwStatus.ts
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
import {kw}             from "../../kw";


//@formatter:on
export class kwStatus
{

	public constructor(
		private bStatus: boolean,
		private msg: any,
		private data: any   )
	{
		//console.log("kwStatus::constructor() called.");
	}

	public init(): boolean
	{
		//console.log("kwStatus::init() called.");

		if (!kw.isBoolean(this.bStatus))
		{
			//console.log("kwStatus::init() bStatus is invalid.");
			return false;
		}
		//console.info("kwStatus::init() bStatus is [", this.bStatus, "]");

		if (!kw.isNull(this.data))
		{
			//console.info("kwStatus::init() data is [", this.data, "]");
		}

		if (this.bStatus)
		{
			return true;
		}

		if (kw.isNull(this.msg))
		{
			//console.log("kwStatus::init() msg is invalid.");
			return false;
		}
		//console.info("kwStatus::init() msg is [", this.msg, "]");

		if (kw.isNull(this.msg))
		{
			//console.log("kwStatus::init() msg is invalid.");
			return false;
		}
		//console.info("kwStatus::init() msg is [", this.msg, "]");

		return true;
	}

	public getStatus(): boolean
	{
		return this.bStatus;
	}

	public getMsg(): any
	{
		return this.msg;
	}
}
