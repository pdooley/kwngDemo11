/**********************************************************************
 *
 * kwNg/state/kwNgStDataMap.ts
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
import { EventEmitter }                from '@angular/core';
import { Injectable }                from '@angular/core';

import { AppInjector }          from '@app/appInjector';

import { kwStDataMap }              from "@kwState/kwStDataMap";
import { kwBSTraceVal }             from "@kwNgBS/trace/kwBSTraceVal";



@Injectable()
export abstract class kwNgStDataMap extends kwStDataMap
{
    protected theSignal: EventEmitter<object[]>;
    public changed$: EventEmitter<object[]>;

    public constructor(
        srvcTrace: kwBSTraceVal,
        sTagId: string  )
    {
        super(
            srvcTrace,
            sTagId  );

        //console.log(this.sClass, "::constructor() called.");
        this.theSignal = new EventEmitter<object[]>();
        this.changed$=this.theSignal;
    }

//@formatter:on

}
