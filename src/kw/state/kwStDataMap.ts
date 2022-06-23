/**********************************************************************
 *
 * kw/state/kwStDataMap.ts
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
import { kwStDataList }     from "./kwStDataList";
import { kwMap }            from "@kwClass/kwMap";
import { kwTrace }          from "@kwClass/trace/kwTrace";
//@formatter:off



export abstract class kwStDataMap extends kwStDataList
{
    private map: kwMap;

    public constructor(
        srvcTrace: kwTrace,
        sTagId: string,
        sTagType?: string   )
    {
        super(
            srvcTrace,
            sTagId,
            sTagType    );

        //console.log(this.sClass, "::constructor() called.");
    }

    protected abstract createMap(data: object[]): kwMap

    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");

        data = kw.isArray(data) ? data : new Array(data);

        const map = this.createMap(data);
        if (!kwMap.is(map))
        {
            //console.info(this.sClass, "::change() error creating map.");
            return;
        }

        this.map = map;

        super.change(data);
    }

    public clear()
    {
        //console.log(this.sClass, "::clear() called.");
        super.clear();
        this.map = null;
    }

    public getByCode(sCode: string): object
    {
        //console.log(this.sClass, "::getByCode() called.");

        if (!kw.isString(sCode))
        {
            console.error(this.sClass, "::getByCode() sCode is invalid.");
            return;
        }
        //console.info(this.sClass, "::getByCode() sCode is [", sCode, "]");

        if (!kwMap.is(this.map))
        {
            //console.info(this.sClass, "::getByCode() map is empty.");
            return;
        }

        return this.map.getByCode(sCode);
    }

    public getById(nId: number): object
    {
        //console.log(this.sClass, "::getById() called.");

        if (!kw.isNumber(nId))
        {
            console.error(this.sClass, "::getById() nId is invalid.");
            return;
        }
        //console.info(this.sClass, "::getById() nId is [", nId, "]");

        if (!kw.isMap(this.map))
        {
            //console.info(this.sClass, "::getById() map is empty.");
            return;
        }

        return this.map.getById(nId);
    }

    public getMap(): kwMap
    {
        return this.map
    }

    protected setMap(map: kwMap): void
    {
        this.map = map;
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStDataMap);
    }
}
