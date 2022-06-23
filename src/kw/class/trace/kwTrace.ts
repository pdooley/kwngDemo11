/**********************************************************************
 *
 * kw/class/trace/kwTrace.ts
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

const bDEFAULT: boolean = true;
//@formatter:off

export class kwTrace
{
	protected bData: any;

	protected sTag: string = this.constructor.name;


	public constructor()
	{
		//console.log("kwTrace::constructor() called.");
	}

	public change(bData: boolean): void
	{
		//console.log(this.sTag, "::change() called.");

		this.bData = bData;

		//console.info(this.sTag, "::change() bData is [", this.bData, "]");
	}

	public clear(): void
	{
		//console.log("kwTrace::clear() called.");
		this.bData = null;
	}

	public get(): boolean
	{
		return this.bData;
	}

	public traceState(): boolean
	{
		return this.bData;
	}
}
