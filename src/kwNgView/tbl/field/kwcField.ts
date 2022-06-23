/**********************************************************************
 *
 * kwNgComp/tab/kwcTab.ts
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


const sLINK: string = "sLink";
const sTITLE: string = "sTitle";

//@formatter:on

@Component({
    selector: 'kwc-tab',
    templateUrl: 'kwcField.html',
    styleUrls: ['kwcField.css']
})
export class kwcTab implements OnInit {
    @Input() data;

    info: object;

    constructor() {
        //console.log('kwcTab::constructor() called.');
    }

    ngOnInit(): void {
        //console.log('kwcTab::ngOnInit() called.');

        if (kw.isNull(this.data)) {
            console.error('kwcTab::ngOnInit() data is invalid.');
            return;
        }
        //console.info('kwcTab::ngOnInit() data is [', this.data, "].");
        this.info = this.data;

    }

}
