/**********************************************************************
 *
 * kwNgComp/list/hdr/kwcListHdr.ts
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
import {kwLog} from "@kw/kwLog";



const sTAG: string = "hdr";

@Component({
    selector: 'kwc-list-hdr',
    templateUrl: 'kwcListHdr.html',
    styleUrls: ['kwcListHdr.scss']
})
export class kwcListHdr implements OnInit {
    @Input() data: object;

    info: object;

    constructor()
    {
    }

//@formatter:on

    ngOnInit(): void {
        //console.log("kwcListHdr::ngOnInit() called.");

        if (kw.isNull(this.data)) {
            console.error('kwNgHdr::ngOnInit() data is invalid.');
            return;
        }
        //console.info('kwNgHdr::ngOnit() data is [', this.data, ']')

        const hdr: object = this.data[sTAG];
        if (kw.isNull(hdr)) {
            //console.info('kwNgHdr::create() top not provided.');
            return;
        }
        //console.info('kwNgHdr::create() top is [', top, ']');
        this.info = hdr;
    }

}
