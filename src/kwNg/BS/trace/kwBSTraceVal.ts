/**********************************************************************
 *
 * kwNg/BS/trace/kwBSTraceVal.ts
 *
 * author: Patrick Dooley
 *
 * This is a very special file - it must remain as it is.
 * It must not inherit from anything.
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable }        from '@angular/core';

import {kw }                from "@kw/kw";
import {kwTrace }           from "@kwClass/trace/kwTrace";

//@formatter:on

const bDEFAULT: boolean = true;


@Injectable()
export class kwBSTraceVal extends kwTrace
{
    constructor()
    {
        super();
        //console.log(this.sClass,"::constructor() called.");
    }

    public traceState(): boolean
    {
        return this.get();
    }

}
