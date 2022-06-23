/**********************************************************************
 *
 * kwNgComp/dlg/act/kwDlgAct.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

import {kw} from "@kw/kw";
import {kwViewBtnType} from "@kwViewClass/viewBtn/kwViewBtnType";

//@formatter:on


@Component({
    selector: 'kwc-dlg-act',
    templateUrl: './kwDlgAct.html',
})
export class kwDlgAct implements OnInit {
    @Input() viewIn: kwViewBtnType;

    info: object;

    constructor() {
        //console.log("kwDlgAct::constructor() called.");
    }

    ngOnInit(): void {
        //console.log("kwDlgAct::ngOnInit() called.");

        if (kw.isNull(this.info)) {
            console.error("kwDlgAct::ngOnInit() info is invalid.");
            //return;
        }
        //console.info("kwDlgAct::ngOnInit() info is [", this.info, "]");
    }
}
