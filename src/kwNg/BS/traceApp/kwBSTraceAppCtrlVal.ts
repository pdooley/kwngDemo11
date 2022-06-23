/**********************************************************************
 *
 * kwNg/BS/traceApp/kwBSTraceAppCtrlVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component }             from "@angular/core";
import {OnInit }                from '@angular/core';
import {OnDestroy }             from '@angular/core';
import {Subscription }          from 'rxjs/Subscription';

import {kw }                    from "@kw/kw";
import {kwBS }                  from "@kwClass/BS/kwBS";
import {kwBSVal }               from "@kwNgBS/kwBSVal";
import {kwBSTraceAppVal }       from "./kwBSTraceAppVal";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-trace-app-ctrl-val',
    template: `<br>`,
})
export class kwBSTraceAppCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSTraceAppVal    )
    {
        //console.log("kwBSTraceAppCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwTraceAppBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwTraceAppBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSTraceAppCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSTraceAppCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSTraceAppCtrlVal::load() BS is [", BS, "]");

        const bTraceApp: boolean = BS.bTraceApp;
        if (!kw.isBoolean(bTraceApp))
        {
            console.error("kwBSTraceAppCtrlVal::load() error retrieving bTraceApp.");
            return false;
        }
        //console.info("kwBSTraceAppCtrlVal::load() bTraceApp is [", bTraceApp, "]");

        this.srvcStore.change(bTraceApp);

        return true;
    }
}
