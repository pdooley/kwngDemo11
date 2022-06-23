/**********************************************************************
 *
 * kw/class/kwMap.ts
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
import {kw }                       from "@kw/kw"
import {kwIntf }                   from "./kwIntf";
//@formatter:off


export abstract class kwMap implements kwIntf
{

	theMap: Map<string, object>;

	constructor(protected theArr: object[])
	{
		//console.log("kwMap::constructor() called.");
	}

	public abstract xImport(rec: object): object;
	protected abstract createMap(): boolean;

	public init(): boolean
	{
		//console.log("kwMap::init() called.");

		if (kw.isNull(this.theArr))
		{
			console.error("kwMap::init() theArr is invalid");
			return false;
		}

		if (!this.createMap())
		{
			console.error("kwMap::init() error creating map");
			return false;
		}

		return true;
	}

	protected setMap(theMap: Map<string, object>): void
	{
		this.theMap = theMap;
	}

	public clear()
	{
		//console.log("kwMap::clear() called.");
		this.theArr = null;
		this.theMap = null;
	}

	public retrieveArr(): object[]
	{
		//console.log("kwMap::get() called.");
		return this.theArr;
	}

	public getMap(): Map<string, object>
	{
		//console.log("kwMap::get() called.");
		return this.theMap;
	}

	public getByCode(sCode: string): object
	{
		//console.log("kwMap::getByCode() called.");

		if (!kw.isString(sCode))
		{
			console.error("kwMap::getByCode() sCode is invalid");
			return;
		}

		if (!kw.isMap(this.theMap))
		{
			console.error("kwMap::getByCode() mapToIndex is invalid");
			return;
		}

		const val: object = this.theMap.get(sCode);
		if (kw.isNull(val))
		{
			console.error("kwMap::getByCode() val is invalid");
			return;
		}

		return val;
	}

	public getById(nVal: number): object
	{
		//console.log("kwMap::toString() called.");

		if (!kw.isNumber(nVal))
		{
			console.error("kwMap::toString() nVal is invalid.");
			return;
		}

		if (kw.isNull(this.theMap))
		{
			console.error("kwMap::toString() sVal is invalid.");
			return;
		}

		return this.theMap[nVal];
	}

	public toIndex(sVal: string): number
	{
		//console.log("kwMap::toString() called.");

		if (!kw.isString(sVal))
		{
			console.error("kwMap::toString() sVal is invalid.");
			return -1;
		}

		if (kw.isNull(this.theMap))
		{
			console.error("kwMap::toString() sVal is invalid.");
			return -1;
		}

		return this.theMap[sVal];
	}

	static is(obj: object): boolean
	{
		return kw.is(obj, kwMap)
	}

}
