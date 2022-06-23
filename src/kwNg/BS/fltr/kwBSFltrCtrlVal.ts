/**********************************************************************
 *
 * kwNg/BS/fltr/kwBSFltrCtrlVal.ts
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
import {Component }     from "@angular/core";
import {OnInit }        from '@angular/core';
import {OnDestroy }     from '@angular/core';
import {Subscription }  from 'rxjs/Subscription';

import {kw }            from "@kw/kw";
import {kwBS }          from "@kwClass/BS/kwBS";
import {kwBSFltrVal }   from "./kwBSFltrVal";
import {kwBSVal }       from "@kwNgBS/kwBSVal";
import {kwtFltr }       from "@kwClass/fltr/kwtFltr";


@Component({
    selector: 'kw-bootstrap-fltr-ctrl-val',
    template: `<br>`,
})
export class kwBSFltrCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSFltrVal    )
    {
        //console.log("kwBSFltrCtrlVal::constructor() called");
    }


//@formatter:on

    ngOnInit()
    {
        //console.log("kwFltrBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwFltrBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSFltrCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSFltrCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSFltrCtrlVal::load() BS is [", BS, "]");

        const fltr: kwtFltr = BS.fltr;
        if (!kw.isValid(fltr))
        {
            console.error("kwBSFltrCtrlVal::load() error retrieving fltr.");
            return false;
        }
        //console.info("kwBSFltrCtrlVal::load() fltr is [", fltr, "]");

        this.srvcStore.change(fltr);

        return true;
    }
}
