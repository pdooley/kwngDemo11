/**********************************************************************
 *
 * kwNg/BS/autoLogin/kwBSAutoLoginCtrlVal.ts
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
import {kwBSAutoLoginVal }      from "./kwBSAutoLoginVal";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-auto-login-ctrl-val',
    template: `<br>`,
})
export class kwBSAutoLoginCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSAutoLoginVal    )
    {
        //console.log("kwBSAutoLoginCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwAutoLoginBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwAutoLoginBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSAutoLoginCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSAutoLoginCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSAutoLoginCtrlVal::load() BS is [", BS, "]");

        const bAutoLogin: boolean = BS.bAutoLogin;
        if (!kw.isBoolean(bAutoLogin))
        {
            console.error("kwBSAutoLoginCtrlVal::load() error retrieving bAutoLogin.");
            return false;
        }
        //console.info("kwBSAutoLoginCtrlVal::load() bAutoLogin is [", bAutoLogin, "]");

        this.srvcStore.change(bAutoLogin);

        return true;
    }
}
