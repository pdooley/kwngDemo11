/**********************************************************************
 *
 * kwNg/state/kwNgStDataVal.ts
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
import { EventEmitter }     from '@angular/core';
import { Injectable }       from '@angular/core';

import { AppInjector }      from '@app/appInjector';

import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";
import { kwStDataVal }      from "@kwState/kwStDataVal";

//@formatter:off


@Injectable()
export class kwNgStDataVal extends kwStDataVal
{
    private theSignal: EventEmitter<any>;
    public changed$: EventEmitter<any>;

    public constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);
        //console.log("kwNgStDataVal::constructor() called.");
        this.theSignal = new EventEmitter<any>();
        this.changed$=this.theSignal;
    }

    protected broadcast(data: any)
    {
        //console.log("kwNgStDataVal::change() called.");
        this.theSignal.emit(data);
    }
}
