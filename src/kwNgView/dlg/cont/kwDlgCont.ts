/**********************************************************************
 *
 * kwNgComp/dlg/cont/kwDlgCont.ts
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
    selector: 'kwc-dlg-cont',
    templateUrl: './kwDlgCont.html',
})
export class kwDlgCont implements OnInit {
    @Input() viewIn: object;

    info: object;

    constructor() {
        //console.log("kwDlgCont::constructor() called.");
    }

    ngOnInit(): void {
        //console.log("kwDlgCont::ngOnInit() called.");

        if (kw.isNull(this.info)) {
            console.error("kwDlgCont::ngOnInit() info is invalid.");
            return;
        }
        //console.info("kwDlgCont::ngOnInit() info is [", this.info, "]");
    }

}
