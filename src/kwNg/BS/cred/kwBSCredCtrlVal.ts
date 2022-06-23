/**********************************************************************
 *
 * kwNg/BS/cred/kwBSCredCtrlVal.ts
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
import {Component }    from "@angular/core";
import {OnInit }       from '@angular/core';
import {OnDestroy }    from '@angular/core';
import {Subscription } from 'rxjs/Subscription';

import {kwBS }         from "@kwClass/BS/kwBS";
import {kwBSCredVal }  from "./kwBSCredVal";
import {kwBSVal }      from "@kwNgBS/kwBSVal";
import {kwCred }       from "@kwClass/cred/kwCred";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-cred-ctrl-val',
    template: `<br>`,
})
export class kwBSCredCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSCredVal    )
    {
        //console.log("kwBSCredCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwCredBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwCredBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSCredCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSCredCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSCredCtrlVal::load() BS is [", BS, "]");

        const cred: kwCred = BS.creds;
        if (!kwCred.is(cred))
        {
            console.error("kwBSCredCtrlVal::load() error retrieving cred.");
            return false;
        }
        //console.info("kwBSCredCtrlVal::load() cred is [", cred, "]");

        this.srvcStore.change(cred);

        return true;
    }
}
