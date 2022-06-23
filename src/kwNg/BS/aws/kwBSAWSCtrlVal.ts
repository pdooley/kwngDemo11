/**********************************************************************
 *
 * kwNg/BS/aws/kwBSAWSCtrlVal.ts
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
import {AfterViewInit }    from '@angular/core';
import {Component }        from '@angular/core';
import {OnDestroy }        from '@angular/core';
import {Subscription }     from 'rxjs/Subscription';

import {kw }               from "@kw/kw";
import {kwAWS}              from "@kwClass/aws/kwAWS";
import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";

import {kwBSAWSVal }     from "./kwBSAWSVal";



@Component({
    selector: 'kw-bootstrap-aws-ctrl-val',
    template: `<br>`,
})
export class kwBSAWSCtrlVal implements AfterViewInit, OnDestroy
//@formatter:on
{
    subBS: Subscription;

    constructor(
        private    srvcVal: kwBSAWSVal,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSAWSCtrlVal::constructor() called");
    }

    ngAfterViewInit()
    {
        //console.log("kwBSAWSCtrlVal::ngAfterViewInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSAWSCtrlVal::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSAWSCtrlVal::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            //console.info("kwBSAWSCtrlVal::load() BS is invalid.");
            return;
        }
        //console.info("kwBSAWSCtrlVal::load() BS is ", BS);

        const aws: kwAWS = BS.aws;
        if (kw.isNull(aws))
        {
            console.error("kwBSAWSCtrlVal::load() aws is invalid.");
            return;
        }
        //console.info("kwBSAWSCtrlVal::load() aws is [", aws, "]");

        this.srvcVal.change([aws]);
    }

}
