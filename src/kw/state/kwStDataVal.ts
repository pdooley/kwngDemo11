/**********************************************************************
 *
 * kw/state/kwStDataVal.ts
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
import { kwStData }         from "./kwStData";
import { kwTrace }          from "@kwClass/trace/kwTrace";
//@formatter:off


export abstract class kwStDataVal extends kwStData
{
    public constructor(srvcTrace: kwTrace)
    {
        super(srvcTrace);

        //console.log(this.sClass, "::constructor() called.");
    }

    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");
        if (kw.isNull(data))
        {
            return super.change(data);
        }

        if (!kw.isArray(data))
        {
            return super.change(data);
        }

        //console.info(this.sClass, "::change() data is an array - storing only first item.");
        super.change(data[0])
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStDataVal);
    }

    public setTag(data)
    {
        //console.log(this.sClass, "::setTag() called.");

        if (kw.isNull(data))
        {
            console.error(this.sClass, "::setTag() data is invalid.");
            return;
        }
        //console.info(this.sClass, "::setTag() data is [", data, "]");

        const item = this.get();
        if (kw.isNull(item))
        {
            console.error(this.sClass, "::setTag() item is invalid.");
            return;
        }
        //console.info(this.sClass, "::setTag() item is [", item, "]");

        const sTag = data.sTag;
        if (!kw.isString(sTag))
        {
            console.error(this.sClass, "::setTag() sTag is invalid.");
            return;
        }
        //console.info(this.sClass, "::setTag() sTag is [", sTag, "]");

        item[sTag] = data.val;
        //console.info(this.sClass, "::setTag() item is [", item, "]");

        this.change(item);
    }

}
