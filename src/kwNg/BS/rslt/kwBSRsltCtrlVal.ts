/**********************************************************************
 *
 * kwNg/BS/rslt/kwBSRsltCtrlVal.ts
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
import {kwBSRsltVal }    from "./kwBSRsltVal";
import {kwBSVal }       from "@kwNgBS/kwBSVal";
import {kwtRslt }        from "@kwClass/rslt/kwtRslt";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-rslt-ctrl-val',
    template: `<br>`,
})
export class kwBSRsltCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private srvcBS: kwBSVal,
        private srvcStore:  kwBSRsltVal    )
    {
        //console.log("kwBSRsltCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwRsltBSCtrlApi::ngOnInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwRsltBSCtrlApi::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    protected load(): boolean
    {
        //console.log("kwBSRsltCtrlVal::load() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSRsltCtrlVal::load() error retrieving BS.");
            return false;
        }
        //console.info("kwBSRsltCtrlVal::load() BS is [", BS, "]");

        const rslt: kwtRslt = BS.rslt;
        if (!kw.isValid(rslt))
        {
            console.error("kwBSRsltCtrlVal::load() error retrieving rslt.");
            return false;
        }
        //console.info("kwBSRsltCtrlVal::load() rslt is [", rslt, "]");

        this.srvcStore.change(rslt);

        return true;
    }
}
