/**********************************************************************
 *
 * kwNg/BS/trace/kwBSTraceCtrlVal.ts
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
import {Component }            from "@angular/core";
import {OnInit }               from '@angular/core';
import {OnDestroy }               from '@angular/core';
import {Subscription }            from 'rxjs/Subscription';

import {kw }                   from "@kw/kw";
import {kwBS }                 from "@kwClass/BS/kwBS";
import {kwBSVal }              from "@kwNgBS/kwBSVal";

import {kwBSTraceVal }         from "./kwBSTraceVal";

//@formatter:on


@Component({
    selector: 'kw-bootstrap-trace-ctrl-val',
    template: `<br>`,
})
export class kwBSTraceCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSTraceVal    )
    {
        //console.log("kwBSTraceCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwTraceBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwTraceBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSTraceCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSTraceCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSTraceCtrlVal::load() BS is [", BS, "]");

        const bTraceState: boolean = BS.bTraceState;
        if (!kw.isBoolean(bTraceState))
        {
            console.error("kwBSTraceCtrlVal::load() error retrieving btraceState.");
            return false;
        }
        //console.info("kwBSTraceCtrlVal::load() btraceState is [", btraceState, "]");

        this.srvcStore.change(bTraceState);

        return true;
    }
}
