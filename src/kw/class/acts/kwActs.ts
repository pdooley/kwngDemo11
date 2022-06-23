/**********************************************************************
 *
 * kw/class/acts/kwActs.ts
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
import { kwAct }            from "@kwClass/act/kwAct";
import { kwActEnum }        from "@kwClass/act/kwActEnum";
import { kwActSrvc }        from "@kwClass/act/kwActSrvc";
import { kwActType }        from "@kwClass/act/kwActType";
import { kwActGet }         from "@kwClass/act/kwActGet";
import { kwActDel }         from "@kwClass/act/kwActDel";
import { kwActPost }        from "@kwClass/act/kwActPost";
import { kwActUpdate }      from "@kwClass/act/kwActUpdate";
import { kwActPatch }       from "@kwClass/act/kwActPatch";
import { kwApi }            from "@kwClass/api/kwApi";
import { kwApiType }        from "@kwClass/api/kwApiType";

import { kwActsSrvc }       from "./kwActsSrvc";
import { kwActsType }       from "./kwActsType";

const sDEL:     string = 'delete';
const sGET:     string = 'get';
const sPATCH:   string = 'patch';
const sPOST:    string = 'post';
const sUPDATE:  string = 'update';


export class kwActs
//@formatter:on
{
	protected sTag: string = this.constructor.name;

	delete: kwAct;
	get: kwAct;
	patch: kwAct;
	post: kwAct;
	update: kwAct;

	constructor(private type: kwActsType)
	{
		//console.log(this.sTag, "::constructor() is called.");
	}

	init(): boolean
	{
		//console.log("kwActs::init() is called.");

		//console.info(this.sTag, "::init() type is[", this.type, "].");

		if (kw.isNull(this.type))
		{
			console.error("kwActs::init() type is invalid.");
			return false;
		}

		const typeDel: kwActType = this.type[sDEL];
		if (!kw.isNull(typeDel))
		{
			const act: kwAct = new kwActDel(typeDel);
			if (!act.init())
			{
				console.error("kwActs::init() error creating del.");
				return false;
			}
			this.delete = act;
		}

		const typeGet: kwActType = this.type[sGET];
		if (!kw.isNull(typeGet))
		{
			const act: kwAct = new kwActGet(typeGet);
			if (!act.init())
			{
				console.error("kwActs::init() error creating get.");
				return false;
			}
			this.get = act;
		}

		const typePatch: kwActType = this.type[sPATCH];
		if (!kw.isNull(typePatch))
		{
			const act: kwAct = new kwActPatch(typePatch);
			if (!act.init())
			{
				console.error("kwActs::init() error creating patch.");
				return false;
			}
			this.patch = act;
		}

		const typePost: kwActType = this.type[sPOST];
		if (!kw.isNull(typePost))
		{
			const act: kwAct = new kwActPost(typePost);
			if (!act.init())
			{
				console.error("kwActs::init() error creating post.");
				return false;
			}
			this.post = act;
		}

		const typeUpdate: kwActType = this.type[sUPDATE];
		if (!kw.isNull(typeUpdate))
		{
			const act: kwAct = new kwActUpdate(typeUpdate);
			if (!act.init())
			{
				console.error("kwActs::init() error creating update.");
				return false;
			}
			this.update = act;
		}

		return true;
	}

	getDelete(): kwAct {
		return this.delete;
	}

	getGet(): kwAct{
		return this.get;
	}

	getPatch(): kwAct{
		return this.patch;
	}

	getPost(): kwAct{
		return this.post;
	}

	getUpdate(): kwAct{
		return this.update;
	}


	static is(obj: object): boolean
	{
		return kw.is(obj, kwActs)
	}


}

