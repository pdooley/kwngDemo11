/**********************************************************************
 *
 * kwNgComp/top/kwcTop.ts
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


const sTAG: string = "top";
const sLOGO: string = "logo";
const sNAME: string = "name";


@Component({
    selector: 'kwc-top',
    templateUrl: 'kwcTop.html',
    styleUrls: ['kwcTop.css']
})
export class kwcTop implements OnInit {
    @Input() viewIn;

    sLogo: string;
    sName: string;

    info: object;

    constructor() {
        //console.log('kwcTop::constructor() called.');
    }

    ngOnInit(): void {
        //console.log("kwcTop::ngOnInit() called.");

        if (kw.isNull(this.viewIn)) {
            console.error('kwcTop::ngOnInit() viewIn is invalid.')
            return;
        }
        //console.info('kwcTop::ngOnit() viewIn is [', this.viewIn, ']')


        const info = this.viewIn[sTAG];
        if (kw.isNull(info)) {
            //console.info('kwcTop::ngOnInit() top is not provided.');
            return;
        }
        //console.info('kwcTop::ngOnit() info is [', info, ']');
        this.info = info;


        //this.loadLogo();
        //this.loadName();
    }

    loadLogo(): void {
        //console.log("kwcTop::loadLogo() called.");

        if (kw.isNull(this.viewIn)) {
            console.error('kwcTop::loadLogo() viewIn is invalid.')
            return;
        }
        //console.info('kwcTop::loadLogo() viewIn is [', this.viewIn, ']')

        const sLogo = this.viewIn[sNAME];
        if (!kw.isString(sLogo) || sLogo.length === 0) {
            console.error('kwcTop::loadLogo() sLogo is invalid.')
            return;
        }
        //console.info('kwcTop::loadLogo() sLogo is [', sLogo, ']')
        this.sLogo = sLogo;
    }

    loadName(): void {
        //console.log("kwcTop::loadName() called.");

        if (kw.isNull(this.viewIn)) {
            console.error('kwcTop::loadName() viewIn is invalid.')
            return;
        }
        //console.info('kwcTop::loadName() viewIn is [', this.viewIn, ']')

        const sName = this.viewIn[sNAME];
        if (!kw.isString(sName) || sName.length === 0) {
            console.error('kwcTop::loadName() sName is invalid.')
            return;
        }
        //console.info('dwTop::loadName() sName is [', sName, ']')
        this.sName = sName;
    }
}
