/**********************************************************************
 *
 * kw/state/kwStMsg.ts
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
import { kw }               from '../kw';
import { kwMsg }            from "@kwClass/msg/kwMsg";
import { kwSt }             from "./kwSt";
import { kwStApi }          from "./kwStApi";
import { kwTrace }          from "@kwClass/trace/kwTrace";
//@formatter:off


export abstract class kwStMsg extends kwSt
{
    public constructor(
        srvcTrace: kwTrace,
        protected srvcApi: kwStApi)
    {
        super(srvcTrace);
        //console.log(this.sClass, "::constructor() called.");
    }

    public change(data: kwMsg): void
    {
        //console.log(this.sClass, "::change() called.");
        if (!kwMsg.is(data))
        {
            console.error(this.sClass, "::change() data is invalid.");
            return
        }
        super.change(data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStMsg);
    }
}
