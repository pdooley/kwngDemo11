/**********************************************************************
 *
 * kwcComp/ctrl/user/kwcUserCtrlView.ts
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

import {Component} from '@angular/core';

import {kwViewsList} from "@kwNgState/views/kwViewsList";
import {kwNgCtrlSt} from "@kwNgClass/kwNgCtrlSt";

import {kwcUserView} from "./kwcUserView";
//@formatter:off


const sSTATE: string = "user";


@Component({
    selector: 'kwc-user-ctrl-view',
    template: `<br>`,
})
export class kwcUserCtrlView extends kwNgCtrlSt {
    constructor(
        srvcSrc: kwViewsList,
        srvcDst: kwcUserView) {
        super(srvcSrc, srvcDst, sSTATE);
        //console.log("kwcUserCtrlView::constructor() called");
    }
}
