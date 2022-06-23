/**********************************************************************
 *
 * kwNgComp/col/kwcCol.ts
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


const sTAG: string = "col";

//@formatter:on

@Component({
    selector: 'kwc-col',
    templateUrl: 'kwcCol.html',
    styleUrls: ['kwcCol.css']
})
export class kwcCol implements OnInit {
    @Input() viewIn;

    info: object;

    constructor() {
        //console.log('kwcCol::constructor() called.');
    }

    ngOnInit(): void {
        //console.log('kwcCol::ngOnInit() called.');

        if (kw.isNull(this.viewIn)) {
            console.error('kwcCol::ngOnInit() viewIn is invalid.');
            return;
        }
        //console.info('kwcCol::ngOnInit() viewIn is [', this.viewIn, "].");
        this.info = this.viewIn;
    }

}
