/**********************************************************************
 *
 * kw/ctrl/kwCtrlApi.ts
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
import { kw }               from "@kw/kw"
import { kwApi }            from "@kwClass/api/kwApi";
import { kwApiType }        from "@kwClass/api/kwApiType";
import { kwCtrl }           from "./kwCtrl";
import { kwStApi }          from "@kwState/kwStApi";
import { kwStDataList }     from "@kwState/kwStDataList";
//@formatter:off


export class kwCtrlApi extends kwCtrl
{
	constructor(
		srvcSrc: kwStDataList,
		srvcDst: kwStApi,
		private sState: string )
	{
		super(srvcSrc, srvcDst);

		//console.log(this.sClass, "::constructor() called");
	}

	public init(): boolean
	{
		if (!kwStApi.is(this.srvcDst))
		{
			//console.log(this.sClass, "::init() srvcDst is invalid");
			return false;
		}

		if (!kwStDataList.is(this.srvcSrc))
		{
			//console.log(this.sClass, "::init() srvcSrc is invalid");
			return false;
		}

		if (!kw.isString(this.sState))
		{
			//console.log(this.sClass, "::init() sState is invalid");
			return false;
		}

		return true;
	}

	protected load(data?: any): boolean
	{
		//console.log("kwCtrlA::loadApi() called");
		if (!kw.isString(this.sState))
		{
			console.error(this.sClass, "::load() sState is invalid");
			return false;
		}
		//console.info(this.sClass, "::load() sState is [", this.sState, "]");

		if (!kwStDataList.is(this.srvcSrc))
		{
			console.error(this.sClass, "::load() srvcSrc is invalid");
			return false;
		}

		const item: object = this.srvcSrc.getFirst();
		if (kw.isNull(item))
		{
			//console.info(this.sClass, "::load() item is invalid.");
			return false;
		}
		//console.info(this.sClass, "::load() item is ", item);

		const type: kwApiType = item[this.sState];
		if (kw.isNull(type))
		{
			console.error(this.sClass, "::load() api for [", this.sState, "] is not provided.");
			return false;
		}
		//console.info(this.sClass, "::load() success! type is ", type);

		const api = new kwApi(type);
		if (!api.init())
		{
			//console.info(this.sClass, "::load() error creating api.");
			return false;
		}
		//console.info(this.sClass, "::load() success! api is ", api);

		super.load(api);

		return true;
	}
}
