/**********************************************************************
 *
 * kw/class/msg/kwMsg.ts
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
import {kw }		               from "@kw/kw";
import {kwAct }                    from "@kwClass/act/kwAct";
import {kwActs }                   from "@kwClass/acts/kwActs";
import {kwAjax }                   from "@kwClass/ajax/kwAjax";
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwMode }                   from "@kwClass/mode/kwMode";
import {kwHttpHelper }             from "@kwClass/../http/kwHttpHelper";
import {kwHttpHelperMock }         from "@kwClass/../http/kwHttpHelperMock";
import {kwMsgEnum }		           from "./kwMsgEnum";
import {kwMsgSrvc }		           from "./kwMsgSrvc";
import {kwMsgType }		           from "./kwMsgType";
import {kwOptionsType}		       from "@kwClass/options/kwOptionsType";
import {kwOptions }                from "@kwClass/options/kwOptions";
import {kwParam }                  from "@kwClass/param/kwParam";
import {kwSrvcMap }                from "@kwClass/srvc/kwSrvcMap";
import {kwTokenMap }               from "@kwClass/token/kwTokenMap";
//@formatter:on


export abstract class kwMsg
{
	act: kwAct;
	ajax: kwAjax;
	api: kwApi;
	data: object;
	helper: any;
	mode: kwMode;
	options: kwOptions;
	params: object;
	srvcs: kwSrvcMap;
	tokens: kwTokenMap;


	constructor(private nType: kwMsgEnum,
	            private type: kwMsgType,)
	{
		//console.log("kwMsg::constructor() is called.");
	}

	abstract retrieveActImpl(acts: kwActs): kwAct;

	init(): boolean
	{
		//console.log("kwMsg::init() called.");

		if (!kwMsgSrvc.in(this.nType))
		{
			console.error("kwMsg::init() nType is invalid.");
			return false;
		}
		//console.info("kwMsg::init() nType is ", this.nType);

		if (kw.isNull(this.type))
		{
			console.error("kwMsg::init() type is invalid.");
			return false;
		}
		//console.info("kwMsg::init() type is ", this.type);

		const api: kwApi = this.type.api;
		if (!(kwApi.is(api)))
		{
			console.error("kwMsg::init() api is invalid");
			return false;
		}
		//console.info("kwMsg::init() api is ", api);
		this.api = api;

		const data: object = this.type.data;
		if ( kw.isNull(data))
		{
			//console.error("kwMsg::init() data is invalid.");
			//return false;
		}
		//console.info("kwMsg::init() data is ", data);
		this.data = data;

		const params: object = this.type.params;
		if (kw.isNull(params))
		{
			console.error("kwMsg::init() params is not valid.");
			return false;
		}
		//console.info("kwMsg::init() params is ", params);
		this.params = params;

		const srvcs: kwSrvcMap = this.type.srvcs;
		if ( kw.isNull(srvcs))
		{
			console.error("kwMsg::init() srvcs is invalid.");
			return false;
		}
		//console.info("kwMsg::init() srvcs is ", srvcs);
		this.srvcs = srvcs;

		const tokens: kwTokenMap = this.type.tokens;
		if ( kw.isNull(tokens))
		{
			console.error("kwMsg::init() tokens is invalid.");
			return false;
		}
		//console.info("kwMsg::init() tokens is ", tokens);
		this.tokens = tokens;

		if (!this.retrieveMode())
		{
			console.error("kwMsg::init() error retrieving mode.");
			return false;
		}

		if (!this.retrieveAct())
		{
			console.error("kwMsg::init() error retrieving act.");
			return false;
		}

		if (!this.retrieveAjax())
		{
			console.error("kwMsg::init() error retrieving ajax.");
			return false;
		}

		if (!this.createHelper())
		{
			console.error("kwMsg::init() error creating helper.");
			return false;
		}

		if (!this.createOptions())
		{
			console.error("kwMsg::init() error creating options.");
			return false;
		}

		return true
	}

	getData(): object
	{
		return this.data;
	}

	getAjax(): kwAjax
	{
		return this.ajax;
	}

	getHelper()
	{
		return this.helper;
	}

	getMode(): kwMode
	{
		return this.mode;
	}

	getOptions(): kwOptions
	{
		return this.options;
	}

	getSrvcs(): kwSrvcMap
	{
		return this.srvcs;
	}

	getTokens(): kwTokenMap
	{
		return this.tokens;
	}

	getType(): kwMsgEnum
	{
		return this.nType;
	}

	isAdd(): boolean
	{
		return (this.nType === kwMsgEnum.add);
	}

	isDelete(): boolean
	{
		return (this.nType === kwMsgEnum.delete);
	}

	isEdit(): boolean
	{
		return (this.nType === kwMsgEnum.edit);
	}

	isGet(): boolean
	{
		return (this.nType === kwMsgEnum.get);
	}

	isLogin(): boolean
	{
		return (this.nType === kwMsgEnum.login);
	}

	isLogout(): boolean
	{
		return (this.nType === kwMsgEnum.logout);
	}

	isNull(): boolean
	{
		return (this.nType === kwMsgEnum.null);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwMsgEnum);
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwMsg)
	}

	createHelper(): boolean
	{
		//console.log("kwMsg::createHelper() called ");

		if (!kwMode.is(this.mode))
		{
			console.error("kwMsg::createHelper() mode is not valid.");
			return false;
		}

		this.helper = this.mode.isLive() ? kwHttpHelper : kwHttpHelperMock;

		return true;
	}

	createOptions(): boolean
	{
		//console.log("kwMsg::createOptions() called ");

		if (!kwAct.is(this.act))
		{
			console.error("kwMsg::createOptions() ajaxion is invalid");
			return false;
		}

		if (!kwAjax.is(this.ajax))
		{
			console.error("kwMsg::createOptions() ajaxion is invalid");
			return false;
		}

		if ( kw.isNull(this.params))
		{
			//console.error("kwMsg::createOptions() params is invalid");
			//return false;
		}

		if ( kw.isNull(this.srvcs))
		{
			console.error("kwMsg::createOptions() srvcs is invalid");
			return false;
		}

		if ( kw.isNull(this.tokens))
		{
			console.error("kwMsg::createOptions() tokens is invalid");
			return false;
		}

		if (!kwMode.is(this.mode))
		{
			console.error("kwMsg::createOptions() mode is invalid");
			return false;
		}

		const info: kwOptionsType = {
			act: this.act,
			ajax: this.ajax,
			data: this.data,
			params: <kwParam[]>this.params,
			mode: this.mode,
			srvcs: this.srvcs,
			tokens: this.tokens,
		}

		const options: kwOptions = new kwOptions(info);
		if (!options.init())
		{
			console.error("kwMsg::createOptions() error creating options");
			return false;
		}
		//console.info("kwMsg::createOptions() options is ", options);
		this.options = options;

		return true;
	}

	retrieveAct(): boolean
	{
		//console.log("kwMsg::retrieveAct() called.");

		if (!kwApi.is(this.api))
		{
			console.error("kwMsg::retrieveAct() api is invalid.");
			return false;
		}
		//console.info("kwMsg::retrieveAct() api is ", this.api);

		const acts: kwActs = this.api.getActs();
		if (!kwActs.is(acts))
		{
			console.error("kwMsg::retrieveAct() error retrieving acts.");
			return false;
		}

		const act: kwAct = this.retrieveActImpl(acts);
		if (!kwAct.is(act))
		{
			console.error("kwMsg::retrieveAct() error retrieving act.");
			return false;
		}
		//console.info("kwMsg::retrieveAct() act is ", act);
		this.act = act;

		return true;
	}

	retrieveAjax(): boolean
	{
		//console.log("kwMsg::retrieveAjax() called.");

		if (!kwAct.is(this.act))
		{
			console.error("kwMsg::retrieveAjax() act is invalid.");
			return false;
		}

		if (!kwMode.is(this.mode))
		{
			console.error("kwMsg::retrieveAjax() mode is invalid.");
			return false;
		}

		const ajax: kwAjax = this.act.get(this.mode);
		if (!kwAjax.is(ajax))
		{
			console.error("kwMsg::retrieveAjax() error retrieving ajax.");
			return false;
		}
		//console.info("kwMsg::retrieveAjax() ajax is ", ajax);
		this.ajax = ajax;

		return true;
	}

	retrieveMode(): boolean
	{
		//console.log("kwMsg::retrieveMode() called.");

		if (!kwApi.is(this.api))
		{
			console.error("kwMsg::retrieveMode() api is invalid.");
			return false;
		}

		const mode: kwMode = this.api.getMode();
		if (!kwMode.is(mode))
		{
			console.error("kwMsg::retrieveMode() error retrieving mode.");
			return false;
		}
		this.mode = mode;

		return true;
	}


}
