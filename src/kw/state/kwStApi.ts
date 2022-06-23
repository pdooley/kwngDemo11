/**********************************************************************
 *
 * kw/state/kwStApi.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { kw }               from "@kw/kw";
import { kwActs }           from "@kwClass/acts/kwActs";
import { kwApi }            from "@kwClass/api/kwApi";
import { kwMode }           from "@kwClass/mode/kwMode";
import { kwTrace}           from "@kwClass/trace/kwTrace";
import { kwSt }             from "./kwSt";
//@formatter:off


export abstract class kwStApi extends kwSt
{

    public constructor(srvcTrace: kwTrace)
    {
        super(srvcTrace);
        //console.log(this.sClass, "::constructor() called.");
    }

    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");
        if (!kwApi.is(data))
        {
            console.error(this.sClass, "::change() data is invalid.");
            return
        }
        super.change(data);
    }

    public get(): kwApi
    {
        return <kwApi>super.get();
    }

    public getActs(): kwActs
    {
        const api: kwApi = this.get();
        if (!kwApi.is(api))
        {
            console.error(this.sClass, "::getActs() api is invalid.");
            return;
        }

        const acts: kwActs = api.getActs();
        if (!kwActs.is(acts))
        {
            console.error(this.sClass, "::getActs() acts is invalid.");
            return;
        }

        return acts;
    }

    public getMode(): kwMode
    {
        const api: kwApi = this.get();
        if (!kwApi.is(api))
        {
            console.error(this.sClass, "::getMode() api is invalid.");
            return;
        }

        const mode: kwMode = api.getMode();
        if (!kwMode.is(mode))
        {
            console.error(this.sClass, "::getMode() mode is invalid.");
            return;
        }

        return mode;
    }

    public getFirst(): kwApi
    {
        return this.get();
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStApi);
    }

}
