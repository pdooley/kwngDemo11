/**********************************************************************
 *
 * kw/class/act/kwAct.ts
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
import {kw }		                from "@kw/kw";
import {kwAjax }                   from "@kwClass/ajax/kwAjax";
import {kwAjaxEnum }               from "@kwClass/ajax/kwAjaxEnum";
import {kwAjaxFcty }               from "@kwClass/ajax/kwAjaxFcty";
import {kwMode }                   from "@kwClass/mode/kwMode";

import {kwActEnum }			    from "./kwActEnum";
import {kwActSrvc }			    from "./kwActSrvc";
import {kwActType }			    from "./kwActType";

//@formatter:on

export class kwAct
{

	debug: kwAjax;
	live: kwAjax;

	constructor(    private nType: kwActEnum,
					private type: kwActType  )
	{
		//console.log("kwAct::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwAct::init() is called.");

		if (!kwActSrvc.in(this.nType))
		{
			console.error("kwAct::init() nType is invalid.");
			return false;
		}
		//console.info("kwAct::init() nType is ", this.nType);

		if (kw.isNull(this.type))
		{
			console.error("kwAct::init() type is invalid.");
			return false;
		}
		//console.info("kwAct::init() type is ", this.type);

		if (!this.retrieveDebug())
		{
			console.error("kwAct::init() error creating debug.");
			return false;
		}

		if (!this.retrieveLive())
		{
			console.error("kwAct::init() live is invalid.");
			return false;
		}

		return true;
	}

	get(mode: kwMode): kwAjax
	{
		if (!kwMode.is(mode))
		{
			console.error("kwAct::init() mode is invalid.");
			return;
		}

		return mode.isDebug() ? this.debug : this.live;
	}

	getDebug()
	{
		return this.debug;
	}

	getLive()
	{
		return this.live;
	}

	getType(): kwActEnum
	{
		return this.nType;
	}

	isPost(): boolean
	{
		return (this.nType === kwActEnum.post);
	}

	isDelete(): boolean
	{
		return (this.nType === kwActEnum.delete);
	}

	isEdit(): boolean
	{
		return (this.nType === kwActEnum.update);
	}

	isGet(): boolean
	{
		return (this.nType === kwActEnum.get);
	}

	isLogin(): boolean
	{
		return (this.nType === kwActEnum.login);
	}

	isLogout(): boolean
	{
		return (this.nType === kwActEnum.logout);
	}

	toString(): string
	{
		return kw.toString(this.nType, kwActEnum);
	}

	retrieveDebug(): boolean
	{
		//console.log("kwAct::retrieveDebug() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwAct::iniretrieveDebugt() type is invalid.");
			return false;
		}
		//console.info("kwAct::retrieveDebug() type is ", this.type);

		const debug: kwAjax = kwAjaxFcty.create(this.type, kwAjaxEnum.debug);
		if (!kwAjax.is(debug))
		{
			console.error("kwAct::init() debug is invalid.");
			return false;
		}
		this.debug = debug;

		return true;
	}

	retrieveLive(): boolean
	{
		//console.log("kwAct::retrieveLive() is called.");

		if (kw.isNull(this.type))
		{
			console.error("kwAct::iniretrieveLivet() type is invalid.");
			return false;
		}
		//console.info("kwAct::retrieveLive() type is ", this.type);

		const live: kwAjax = kwAjaxFcty.create(this.type, kwAjaxEnum.live);
		if (!kwAjax.is(live))
		{
			console.error("kwAct::init() live is invalid.");
			return false;
		}
		this.live = live;

		return true;
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwAct)
	}

}

