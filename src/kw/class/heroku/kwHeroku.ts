/**********************************************************************
 *
 * kw/class/kwHeroku.ts
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


const sTAG_CREATED_AT: string   = "createdAt";
const sTAG_ID: string           = "_id";
const sTAG_UPDATED_AT: string   = "updatedAt";

export abstract class kwHeroku
//@formatter:on
{
	protected sClass: string = this.constructor.name;

	public data: object;

	protected sCreatedAt: string;
	protected sId: string;
	protected sUpdatedAt: string;

	constructor(
		private sTag: string="",
		private parent: object )
	{
		//console.log(this.sClass, "::constructor() called");
	}

	protected abstract createChildren(): boolean

	init(): boolean
	{
		//console.log(this.sClass, "::init() called.");

		if (!kw.isNull(this.data))
		{
			console.error(this.sClass, "::init() data already created ");
			return true;
		}

		if (kw.isNull(this.parent))
		{
			console.error(this.sClass, "::init() parent is invalid ");
			return true;
		}
		//console.info(this.sClass, "::init() parent is [", this.parent, "]");

		if (!kw.isString(this.sTag))
		{
			console.error(this.sClass, "::init() sTag is invalid");
			return true;
		}

		if (this.sTag.length === 0 )
		{
			//console.info(this.sClass, "::init() sTag is empty - using parent");
			this.data = this.parent;
		}
		else
		{
			//console.info(this.sClass, "::init() sTag is [", this.sTag, "]");

			const data = this.parent[this.sTag];
			if (kw.isNull(data))
			{
				console.error(this.sClass, "::init() data for [", this.sTag, "] is invalid.");
				return true;
			}

			if (kw.isArray(data) && data.length !== 1)
			{
				console.error(this.sClass, "::init() data for [", this.sTag, "] is invalid.");
				return true;
			}

			if (kw.isArray(data))
			{
				this.data = data[0];
			}
			else
			{
				this.data = data;
			}
		}
		//console.info(this.sClass, "::init() data is [", this.data, "]");

		const sId: string = this.data[sTAG_ID];
		if (kw.isString(sId))
		{
			//console.info(this.sClass, "::init() sId is [", sId, "]");
			this.sId = sId;
		}


		const sUpdatedAt: string = this.data[sTAG_UPDATED_AT];
		if (kw.isString(sUpdatedAt))
		{
			//console.info(this.sClass, "::init() sUpdatedAt is [", sUpdatedAt, "]");
			this.sUpdatedAt = sUpdatedAt;
		}


		const sCreatedAt: string = this.data[sTAG_CREATED_AT];
		if (kw.isString(sCreatedAt))
		{
			//console.info(this.sClass, "::init() sCreatedAt is [", sCreatedAt, "]");
			this.sCreatedAt = sCreatedAt;
		}

		return this.createChildren();
	}

	getCreatedAt(): string
	{
		return this.sCreatedAt;
	}

	getId(): string
	{
		return this.sId;
	}

	getUpdatedAt(): string
	{
		return this.sUpdatedAt;
	}

}
