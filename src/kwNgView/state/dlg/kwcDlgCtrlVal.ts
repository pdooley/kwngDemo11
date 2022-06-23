/**********************************************************************
 *
 * kwcComp/state/dlg/kwcDlgCtrlVal.ts
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
import {OnInit} from '@angular/core';
import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';


import {kwcDlgVal} from './kwcDlgVal';

//@formatter:on


@Component({
    selector: 'kwc-dlg-ctrl-val',
    template: ``,
})
export class kwcDlgCtrlVal implements OnInit, OnDestroy {
    sub: Subscription;

    constructor(private srvcData: kwcDlgVal) {

        //console.log("kwcDlgCtrlVal::constructor() called");
    }

    ngOnInit() {
        //console.log("kwcDlgCtrlVal::ngOnInit() called");

        this.sub = this.srvcData.changed$.subscribe(dlg => {
            //console.log("kwcDlgCtrlVal::subscribe()::changed$() called.");
        });
    }

    ngOnDestroy() {
        //console.log("kwcDlgCtrlVal::ngOnDestroy() called.");

        this.sub.unsubscribe();
    }

    get() {
        //console.log("kwcDlgCtrlVal::get() called");

        const dlg = this.srvcData.get();
        if (dlg == null) {
            console.error("kwcDlgCtrlVal::get() dlg is invalid.");
            return;
        }
        //console.info("kwcDlgCtrlVal::get() dlg is ", dlg);

    }


}
