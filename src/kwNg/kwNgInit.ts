/**********************************************************************
 *
 * kwNg/kwNgInit.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { Http }                 from "@angular/http";
import { Injectable }           from "@angular/core";

import 'rxjs/add/operator/map';

import { kw }                   from "@kw/kw";
import { kwApis }               from "@kwClass/apis/kwApis";
import { kwBS }                 from "@kwClass/BS/kwBS";
import { kwCred }               from "@kwClass/cred/kwCred";
import { kwMode }               from "@kwClass/mode/kwMode";
import { kwSrvcs }              from "@kwClass/srvcs/kwSrvcs";


const sBOOTSTRAP:       string = 'sBootstrap';
const sURL:             string = 'assets/bootstrap.json';
//@formatter:on

@Injectable()
export class kwNgInit
{
    bootstrap: kwBS;

    constructor(private http: Http)
    {
        //console.log("kwNgInit::constructor() called.");
    }

    getApis(): kwApis
    {
        //console.log("kwNgInit::getApis() called.");
        return this.bootstrap.apis;
    }

    getBS(): kwBS
    {
        //console.log("kwNgInit::getBS() called.");
        return this.bootstrap;
    }

    getCreds(): kwCred
    {
        //console.log("kwNgInit::getCreds() called.");
        return this.bootstrap.creds;
    }

    getMode(): kwMode
    {
        //console.log("kwNgInit::getMode() called.");
        return this.bootstrap.mode;
    }

    getRedirect(): string
    {
        //console.log("kwNgInit::getRedirect() called.");
        return this.bootstrap.sRedirect;
    }

    getSrvcs(): kwSrvcs
    {
        //console.log("kwNgInit::getSrvcs() called.");
        return this.bootstrap.srvcs;
    }

    load(): Promise<any>
    {
        //console.log("kwNgInit::load() called.");

        const promise: Promise<any> = new Promise((resolve: any) =>
        {
            this.http.get(sURL).map(res => res.json())
                .subscribe(config => {
                    resolve(this.store(config));
                });
        });
        return promise;
    }

    store(config: any): boolean
    {
        //console.log("kwNgInit::store() called.");

        if (kw.isNull(config))
        {
            console.error("kwNgInit()::store() config is invalid.");
            return false;
        }

        this.bootstrap = new kwBS(config);
        if (!this.bootstrap.init())
        {
            console.error("kwNgInit()::store() error initializing bootstrap.");
            return false;
        }

        return true;
    }

}

export function initConfig(configService: kwNgInit): Function {
    return () => configService.load();
}
