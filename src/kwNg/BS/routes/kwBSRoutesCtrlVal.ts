/**********************************************************************
 *
 * kwNg/BS/routes/kwBSRoutesCtrlVal.ts
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

import {kw}                from "@kw/kw";
import{kwBS}               from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";
import {kwSigninList}      from "@kwNgState/signin/kwSigninList";
import {kwRoutes}          from "@kwClass/routes/kwRoutes";

import {kwBSRoutesVal }    from "./kwBSRoutesVal";

//@formatter:off


const sROUTE: string = "route";
const sORG: string = "org";

@Component({
    selector: 'kw-bootstrap-routes-ctrl-val',
    template: `<br>`,
})
export class kwBSRoutesCtrlVal implements OnInit, OnDestroy
{
    subBS: Subscription;

    constructor(
        private    srvcRoutes: kwBSRoutesVal,
        private srvcSignin: kwSigninList,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSRoutesCtrlVal::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSRoutesCtrlVal::ngOnInit() called");
        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();
    }

    ngOnDestroy()
    {
        //console.log("kwBSRoutesCtrlVal::ngOnDestroy() called.");
        this.subBS.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSRoutesCtrlVal::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSRoutesCtrlVal::load() BS is invalid.");
            return;
        }
        //console.info("kwBSRoutesCtrlVal::load() BS is ", BS);

        const routes: kwRoutes = BS.routes;
        if (!kwRoutes.is(routes))
        {
            console.error("kwBSRoutesCtrlVal::load() routes is invalid.");
            return;
        }
        //console.info("kwBSRoutesCtrlVal::load() routes is ", routes);

        this.srvcRoutes.change(routes);
    }

    loadOrg(): void
    {
        //console.log("kwBSRoutesCtrlVal::loadOrg() called.");

/*        const routes: kwRouteType[] = this.srvcRoutes.get();
        if (!kw.isArray(routes))
        {
            //console.info("kwBSRoutesCtrlVal::loadOrg() routes not yet loaded.");
            return;
        }
        //console.info("kwBSRoutesCtrlVal::loadOrg() routes are ", routes);

        const signinData: Object = this.srvcSignin.getFirst();
        if (kw.isNull(signinData))
        {
            //console.info("kwBSRoutesCtrlVal::loadOrg() signinData not yet loaded.");
            return;
        }
        //console.info("kwBSRoutesCtrlVal::loadOrg() signinData is ", signinData);

        const sRoute: string = signinData[sROUTE];
        if (!kw.isString(sRoute))
        {
            console.error("kwBSRoutesCtrlVal::loadOrg() sRoute is invalid.");
            return;
        }
        //console.info("kwBSRoutesCtrlVal::loadOrg() sRoute is ", sRoute);

        for (let i in routes)
        {
            //console.info("kwBSRoutesCtrlVal::loadOrg() route is ", routes[i]);
            if (routes[i].sCode === sORG)
            {
                routes[i].sVal = sRoute;
            }
        }

        this.srvcRoutes.change(routes);
*/    }

}
