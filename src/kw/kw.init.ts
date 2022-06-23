/**********************************************************************
 *
 * kwNg/kw.init.ts
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

import { kw }                   from "./kw";
import { kwBS }                 from "./class/BS/kwBS";


const sURL: string = 'assets/bootstrap.json';
//@formatter:on

@Injectable()
export class kwInit
{

    bootstrap: kwBS;

    constructor(private http: Http)
    {
        //console.log("kwInit::constructor() called.");
    }

    load(): Promise<any>
    {
        //console.log("kwInit::load() called.");

        return new Promise((resolve: any) =>
        {
            this.http.get(sURL).map(res => res.json())
                .subscribe(config => {
                    resolve(this.store(config));
                });
        });
    }

    store(config: any): boolean
    {
        //console.log("kwInit::store() called.");

        if (kw.isNull(config))
        {
            console.error("kwInit()::store() config is invalid.");
            return false;
        }

        this.bootstrap = new kwBS(config);
        if (!this.bootstrap.init())
        {
            console.error("kwInit()::store() error initializing bootstrap.");
            return false;
        }

        return true;
    }
}

