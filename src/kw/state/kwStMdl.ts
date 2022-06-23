/**********************************************************************
 *
 * kw/state/kwStMdl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { kw }               from '../kw';
import { kwMdl }            from "@kwClass/mdl/kwMdl";
import { kwMdlSrvc }        from "@kwClass/mdl/kwMdlSrvc";
import { kwSt }             from "./kwSt";
import { kwTrace }          from "@kwClass/trace/kwTrace";
//@formatter:off


export abstract class kwStMdl extends kwSt
{
    public constructor(srvcTrace: kwTrace)
    {
        super(srvcTrace);
        //console.log(this.sClass, "::constructor() called.");
    }

    public change(data: any): void
    {
        //console.log(this.sClass, "::change() called.");
        if (!kwMdl.is(data))
        {
            console.error(this.sClass, "::change() mdl is invalid.");
            return
        }
        super.change(data);
    }

    public copyRec(obj: object): object
    {
        //console.log(this.sClass, "::copyRec() called.");

        if (kwMdl.is(obj))
        {
            console.error(this.sClass, "::copyRec() obj is invalid.");
            return
        }

        const rec: object = kw.clone(obj);
        if (kw.isNull(rec))
        {
            console.error(this.sClass, "::copyRec() rec is invalid.");
            return;
        }

        return rec;
    }

    public createRec(): object
    {
        //console.log(this.sClass, "::createRec() called.");

        if (kwMdl.is(this.data))
        {
            console.error(this.sClass, "::createRec() data is invalid.");
            return
        }

        const rec: object = this.data.createRecord();
        if (kw.isNull(rec))
        {
            console.error(this.sClass, "::createRec() rec is invalid.");
            return;
        }

        return rec;
    }

    public get(): kwMdl
    {
        return <kwMdl>super.get();
    }

    public getFirst(): kwMdl
    {
        return <kwMdl>super.getFirst();
    }

    public xExport(recs: object[]): object[]
    {
        return kwMdlSrvc.xExport(this.data, recs);
    }

    public xExportRec(rec: object): object
    {
        return kwMdlSrvc.xExportRec(this.data, rec);
    }

    public xImport(recs: object[]): object[]
    {
        return kwMdlSrvc.xImport(this.data, recs);
    }

    public xImportRec(rec: object): object
    {
        return kwMdlSrvc.xImportRec(this.data, rec);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStMdl);
    }
}
