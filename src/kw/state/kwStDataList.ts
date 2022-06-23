/**********************************************************************
 *
 * kw/state/kwStDataList.ts
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


export abstract class kwStDataList extends kwStData
{

    public static is(val: object): boolean
    {
        return kw.is(val, kwStDataList);
    }


    protected constructor(
        srvcTrace: kwTrace,
        private sTagId: string,
        private sType?: string )
    {
        super(srvcTrace);

        //console.log(this.sClass, "::constructor() called.");
    }

    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");
        data = kw.isArray(data) ? data : new Array(data);
        super.change(data);
    }

    public get(): object[]
    {
        //console.log(this.sClass, "::get() called.");

        if (!kw.isNull(this.sType))
        {
            if (!kw.isString(this.sType) || this.sType.length === 0)
            {
                console.error(this.sClass, "::get() sType is invalid.");
                return null;
            }
        }

        const result = super.get();
        if (kw.isNull(result))
        {
            return null;
        }

        let data;
        if (kw.isNull(this.sType))
        {
            data = result;
        }
        else
        {
            if (result.length !== 1)
            {
                console.error(this.sClass, "::get() result does not have one item.");
                return null;
            }

            data = result[0][this.sType];
        }

        return data;
    }

    public getFirst(): object
    {
        //console.log(this.sClass, "::get() called.");

        const data = this.get();
        if (kw.isNull(data))
        {
            return null;
        }

        if (!kw.isArray(data))
        {
            //console.info(this.sClass, "::get() data is not an array.");
            return data;
        }

        if (data.length === 0)
        {
            return null;
        }

        return data[0];
    }

    public getId(): string
    {
        //console.log(this.sClass,"::getId() called.");

        if (!kw.isString(this.sTagId))
        {
            console.error(this.sClass, "::getId() sTagId is invalid.");
            return null;
        }
        //console.info(this.sClass,"::getId() sTagId is [", this.sTagId, "]");

        const rec = this.getFirst();
        if (kw.isNull(rec))
        {
            //console.info(this.sClass,"::getId() rec is not set.");
            return null;
        }
        //console.info(this.sClass,"::getId() rec is [", rec, "]");

        const sId = rec[this.sTagId];
        if (!kw.isString(sId))
        {
            console.error(this.sClass, "::getId() sId is invalid.");
            return null;
        }
        //console.info(this.sClass,"::getId() sId is [", sId, "]");

        return sId;
    }
}
