/**********************************************************************
 *
 * kwcComp/state/dlg/kwcDlgVal.ts
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
import {Injectable} from '@angular/core';

import {kwNgStDataVal} from "@kwNgClass/kwNgStDataVal";
import {kwBSTraceVal} from "@kwNgBS/trace/kwBSTraceVal";

import {kwcDlg} from "./kwcDlg";

//@formatter:on

@Injectable()
export class kwcDlgVal extends kwNgStDataVal {
    constructor(srvcTrace: kwBSTraceVal) {
        super(srvcTrace);

        //console.log(this.sTag,"::constructor() called.");
    }

    public get(): kwcDlg {
        return <kwcDlg>super.get();
    }
}
