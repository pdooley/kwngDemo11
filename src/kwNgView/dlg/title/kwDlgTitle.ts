/**********************************************************************
 *
 * kwNgComp/dlg/title/kwDlgTitle.ts
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
import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {OnInit} from '@angular/core';

import {kw} from "@kw/kw";

//@formatter:on


@Component({
    selector: 'kwc-dlg-title',
    templateUrl: './kwDlgTitle.html',
})
export class kwDlgTitle implements OnInit {
    @Input() viewIn: object;

    info: object;

    constructor() {
        //console.log("kwDlgTitle::constructor() called.");
    }

    ngOnInit(): void {
        //console.log("kwDlgTitle::ngOnInit() called.");

        if (kw.isNull(this.info)) {
            console.error("kwDlgTitle::ngOnInit() info is invalid.");
            //return;
        }
        //console.info("kwDlgTitle::ngOnInit() info is [", this.info, "]");
    }
}
