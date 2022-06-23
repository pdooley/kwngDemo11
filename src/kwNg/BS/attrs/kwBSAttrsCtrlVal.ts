/**********************************************************************
 *
 * kwNg/BS/attrs/kwBSAttrsCtrlList.ts
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
import {Component }        from '@angular/core';
import {OnInit }           from '@angular/core';
import {OnDestroy }        from '@angular/core';
import {Subscription }     from 'rxjs/Subscription';

import {kw }               from "@kw/kw";
import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";

import {kwBSAttrsVal }     from "./kwBSAttrsVal";

//@formatter:off


@Component({
    selector: 'kw-bootstrap-attrs-ctrl-val',
    template: `<br>`,
})
export class kwBSAttrsCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private attrsSrvc:  kwBSAttrsVal,
        private srvcBS:     kwBSVal )
    {
        //console.log("kwBSAttrsCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSAttrsCtrlVal::ngOnInit() called");
        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSAttrsCtrlVal::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSAttrsCtrlVal::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSAttrsCtrlVal::load() BS is invalid.");
            return;
        }
        //console.info("kwBSAttrsCtrlVal::load() BS is ", BS);

        const attrs: object = BS.attrs;
        if (!kw.isValid(attrs))
        {
            console.error("kwBSAttrsCtrlVal::load() attrs is invalid.");
            return;
        }
        //console.info("kwBSAttrsCtrlVal::load() attrs is ", attrs);

        this.attrsSrvc.change(attrs);
    }

}
