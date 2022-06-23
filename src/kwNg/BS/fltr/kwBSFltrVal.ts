/**********************************************************************
 *
 * kwNg/BS/fltr/kwBSFltrVal.ts
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

import {kwFltr }           from "@kwClass/fltr/kwFltr";
import {kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";

@Injectable()
export class kwBSFltrVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass,"::constructor() called.");
    }

//@formatter:on

    public get(): kwFltr
    {
        return <kwFltr>super.get();
    }
}
