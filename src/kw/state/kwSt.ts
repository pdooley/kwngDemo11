/**********************************************************************
 *
 * kw/state/kwSt.ts
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
import { kwTrace}           from "@kwClass/trace/kwTrace";
//@formatter:off


export abstract class kwSt
{
    protected sClass: string = this.constructor.name;

    protected data: any;


    public constructor(private srvcTrace: kwTrace)
    {
        //console.log(this.sClass, "::constructor() called.");
    }

    protected abstract broadcast(data: any): void;


    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");

        this.data = data;

        this.trace();
        this.broadcast(data);
    }

    public clear(): void
    {
        //console.log(this.sClass, "::clear() called.");
        this.data = null;
    }

    public get(): any
    {
        return this.data;
    }

    public getFirst(): any
    {
        if (kw.isNull(this.data))
        {
            //console.error(this.sClass, "::getFirst() data is not defined.");
            return;
        }

        if (!kw.isArray(this.data))
        {
            //console.error(this.sClass, "::getFirst() data is not an array.");
            return;
        }

        return this.data[0];
    }

    // do not touch this method!!
    // this console.info must always be left uncommented.
    // when turning of info messages - do search and replace with
    // the preceeding tab/4 spaces
//@formatter:off

    private trace(): void
    {
        if (this.srvcTrace.traceState()) console.info(this.sClass, "::trace() data is [", this.data, "]");
    }

//@formatter:on

    public static is(val: object): boolean
    {
        return kw.is(val, kwSt);
    }
}
