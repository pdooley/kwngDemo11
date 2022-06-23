/**********************************************************************
 *
 * kwcComp/state/user/kwcUserView.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {Injectable} from '@angular/core';

import {kwBSTraceVal} from "@kwNgBS/trace/kwBSTraceVal";
import {kwNgStDataVal} from "@kwNgClass/kwNgStDataVal";

//@formatter:off


@Injectable()
export class kwcUserView extends kwNgStDataVal {
    constructor(srvcTrace: kwBSTraceVal) {
        super(srvcTrace);
        //console.log("kwcUserView::constructor() called.");
    }
}
