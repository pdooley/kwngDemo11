/**********************************************************************
 *
 * kwNg/BS/attrs/kwBSAttrsVal.ts
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
import { Injectable }           from '@angular/core';

import { kwBSTraceVal }         from "@kwNgBS/trace/kwBSTraceVal";
import { kwNgStDataVal }        from "@kwNgClass/kwNgStDataVal";


@Injectable()
export class kwBSAttrsVal extends kwNgStDataVal
{
    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sClass, "::constructor() called.");
    }

//@formatter:on

}
