/**********************************************************************
 *
 * kwNg/BS/rslt/kwBSRsltVal.ts
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
import {Injectable }       from '@angular/core';

import {kwRslt }           from "@kwClass/rslt/kwRslt";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";

@Injectable()
export class kwBSRsltVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    public get(): kwRslt
    {
        return <kwRslt>super.get();
    }
}
