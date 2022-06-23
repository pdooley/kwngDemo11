/**********************************************************************
 *
 * kwNg/BS/disp/kwBSDispCtrlVal.ts
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
import {OnDestroy }                from '@angular/core';
import {Subscription }            from 'rxjs/Subscription';

import {kw }                    from "@kw/kw";
import {kwBS }                  from "@kwClass/BS/kwBS";
import {kwBSVal }               from "@kwNgBS/kwBSVal";
import {kwBSDispVal }           from "./kwBSDispVal";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-disp-ctrl-val',
    template: `<br>`,
})
export class kwBSDispCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSDispVal    )
    {
        //console.log("kwBSDispCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwDispBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwDispBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSDispCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSDispCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSDispCtrlVal::load() BS is [", BS, "]");

        const disp: object = BS.disp;
        if (kw.isNull(disp))
        {
            console.error("kwBSDispCtrlVal::load() error retrieving disp.");
            return false;
        }
        //console.info("kwBSDispCtrlVal::load() disp is [", disp, "]");

        this.srvcStore.change(disp);

        return true;
    }
}
