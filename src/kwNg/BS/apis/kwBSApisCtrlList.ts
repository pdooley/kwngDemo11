/**********************************************************************
 *
 * kwNg/BS/apis/kwBSApisCtrlList.ts
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
import {OnInit }           from '@angular/core';
import {OnDestroy }        from '@angular/core';
import {Subscription }     from 'rxjs/Subscription';

import {kw }               from "@kw/kw";
import {kwApis }           from "@kwClass/apis/kwApis";
import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";

import {kwBSApisList }     from "./kwBSApisList";

//@formatter:off


@Component({
    selector: 'kw-bootstrap-apis-ctrl-list',
    template: `<br>`,
})
export class kwBSApisCtrlList implements AfterViewInit, OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private    srvcVal: kwBSApisList,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSApisCtrlList::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSApisCtrlList::ngOnInit() called");

        //this.subBS = this.srvcBS.changed$.subscribe(info =>
        //{
        //    this.load();
        //});

        //this.load();
    }

    ngAfterViewInit()
    {
        //console.log("kwBSApisCtrlList::ngAfterViewInit() called");

        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSApisCtrlList::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSApisCtrlList::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            //console.info("kwBSApisCtrlList::load() BS is invalid.");
            return;
        }
        //console.info("kwBSApisCtrlList::load() BS is ", BS);

        const apis: kwApis = BS.apis;
        if (!kwApis.is(apis))
        {
            console.error("kwBSApisCtrlList::load() apis is invalid.");
            return;
        }
        //console.info("kwBSApisCtrlList::load() apis is ", apis);

        const hash: object = apis.getApis();
        if (kw.isNull(hash))
        {
            console.error("kwBSApisCtrlList::load() hash is invalid.");
            return;
        }
        //console.info("kwBSApisCtrlList::load() hash is ", hash);

        this.srvcVal.change([hash]);
    }

}
