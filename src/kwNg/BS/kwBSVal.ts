/**********************************************************************
 *
 * kwNg/BS/kwBSVal.ts
 *
 * author: Patrick Dooley
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable }        from '@angular/core';

import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";

//@formatter:on

@Injectable()
export class kwBSVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass,"::constructor() called.");
    }

    public get(): kwBS
    {
        return <kwBS>super.get();
    }
}
