/**********************************************************************
 *
 * kwNgComp/dlg/kwDlgPage.ts
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
import {ChangeDetectorRef} from '@angular/core';
import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {Location} from '@angular/common';
import {OnDestroy} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {kw} from "@kw/kw";
import {kwViewType} from "@kwViewClass/view/kwViewType";
import {kwcDlgVal} from "@kwNgView/state/dlg/kwcDlgVal";

//@formatter:on


const sHOME = "/dashboard";

@Component({
    selector: 'kwc-dlg-page',
    templateUrl: './kwDlgPage.html',
})
export class kwDlgPage implements OnDestroy, OnInit {
    @Input() viewIn: object;

    sub: Subscription;

    info: object;

    constructor(
        private cd: ChangeDetectorRef,
        private location: Location,
        private router: Router,
        private srvcDlg: kwcDlgVal) {
        //console.log("kwDlgPage::constructor() called.");
    }

    ngOnInit(): void {
        //console.log("kwDlgPage::ngOnInit() called.");
        this.sub = this.srvcDlg.changed$.subscribe(info => {
            this.retrieveDlg();
        });

        this.retrieveDlg();
    }

    ngOnDestroy() {
        //console.log("kwDlgPage::ngOnDestroy() called.");
        this.sub.unsubscribe();
    }

    onClick() {
        //console.log("kwDlgPage::onClick() called.");

        const sRoute = this.router.url;
        if (!(sRoute)) {
            console.error("kwDlgPage::onClick() sRoute is invalid.");
            return;
        }
        //console.info("kwDlgPage::onClick() sRoute is [", sRoute, "]");

        if (sRoute === sHOME) {
            return;
        }

        this.location.back();
    }

    retrieveDlg(): void {
        //console.log("kwDlgPage::retrieveDlg() called.");

        /*		const info: kwViewType = this.srvcDlg.get();
                if (kw.isNull(info))
                {
                    console.error("kwDlgPage::retrieveDlg() info invalid.");
                    //return;
                }
                //console.info("kwDlgPage::retrieveDlg() info is [", info, "]");
        
                this.info = info;
        */
    }

}


