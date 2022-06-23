/**********************************************************************
 *
 * kwNg/BS/srvcs/kwBSSrvcsMap.ts
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
import {Injectable }        from '@angular/core';

import {kwBSTraceVal }      from "@kwNgBS/trace/kwBSTraceVal";
import {kwMap }             from "@kwClass/kwMap";
import {kwNgStDataMap }     from "@kwNgClass/kwNgStDataMap";
import {kwSrvcMap }         from "@kwClass/srvc/kwSrvcMap";
import {kwtSrvc }           from "@kwClass/srvc/kwtSrvc";


const sTAG_ID: string = "id";


@Injectable()
export class kwBSSrvcsMap extends kwNgStDataMap
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(
            srvcTrace,
            sTAG_ID     );

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    protected broadcast(data: object[]): void
    {
        //console.log(this.sClass, "::change() called.");
        this.theSignal.emit(<kwtSrvc[]>data);
    }

    protected createMap(data: object[]): kwMap
    {
        //console.log(this.sClass, "::createMap() called.");
        const map = new kwSrvcMap(data);
        if (!map.init())
        {
            console.error(this.sClass, "::createMap() error creating map.");
            return;
        }
        return map;
    }

    public get(): kwtSrvc[]
    {
        return <kwtSrvc[]>super.get();
    }
}
