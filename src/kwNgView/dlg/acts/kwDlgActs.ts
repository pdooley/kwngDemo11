/**********************************************************************
 *
 * kwNgComp/dlg/acts/kwDlgActs.ts
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

//@formatter:on


@Component({
    selector: 'kwc-dlg-acts',
    templateUrl: './kwDlgActs.html',
})
export class kwDlgActs implements OnInit {
    @Input() viewIn;

    info: object[];

    constructor() {
        //console.log("kwDlgActs::constructor() called.");
    }

    ngOnInit(): void {
        //console.log("kwDlg::ngOnInit() called.");

        if (kw.isNull(this.viewIn)) {
            console.error("kwDlgCont::ngOnInit() viewIn is invalid.");
            return;
        }

        if (kw.isNull(this.viewIn[0])) {
            console.error("kwDlgCont::ngOnInit() viewIn is invalid.");
            return;
        }
        //console.info("kwDlgTitle::ngOnInit() viewIn is [", this.viewIn, "]");
    }
}
