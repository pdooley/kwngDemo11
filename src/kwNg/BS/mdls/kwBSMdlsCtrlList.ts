/**********************************************************************
 *
 * kwNg/BS/mdls/kwBSMdlsCtrlList.ts
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
import {OnInit }            from '@angular/core';
import {OnDestroy }        from '@angular/core';
import {Subscription }     from 'rxjs/Subscription';

import {kw }               from "@kw/kw";
import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";
import {kwBSMdlsList }     from "./kwBSMdlsList";
//@formatter:off


@Component({
    selector: 'kw-bootstrap-mdls-ctrl-list',
    template: `<br>`,
})
export class kwBSMdlsCtrlList implements AfterViewInit, OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private    srvcVal: kwBSMdlsList,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSMdlsCtrlMdl::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSMdlsCtrlMdl::ngOnInit() called");

        //this.subBS = this.srvcBS.changed$.subscribe(info =>
        //{
        //    this.load();
        //});

        //this.load();
    }

    ngAfterViewInit()
    {
        //console.log("kwBSMdlsCtrlMdl::ngAfterViewInit() called");

        this.subBS = this.srvcBS.changed$.subscribe( info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSMdlsCtrlMdl::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSMdlsCtrlMdl::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSMdlsCtrlMdl::load() BS is invalid.");
            return;
        }
        //console.info("kwBSMdlsCtrlMdl::load() BS is ", BS);

        const mdls: object = BS.mdls;
        if (kw.isNull(mdls))
        {
            console.error("kwBSMdlsCtrlMdl::load() mdls is invalid.");
            return;
        }
        //console.info("kwBSMdlsCtrlMdl::load() mdls is ", mdls);

        this.srvcVal.change(mdls);
    }

}
