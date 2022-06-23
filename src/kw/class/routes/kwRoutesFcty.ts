/**********************************************************************
 *
 * kw/class/routes/kwRoutesFcty.ts
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
import { kw }                    from "@kw/kw";
import { kwtBS }                 from "@kwClass/BS/kwtBS";
import { kwRoutes }              from "./kwRoutes";
//@formatter:on


const sTAG: string = "routes";


export class kwRoutesFcty
{
    static create(info: kwtBS): kwRoutes
    {
        //console.log("kwRoutesFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwRoutesFcty::create() info is invalid");
            return;
        }
        //console.info("kwRoutesFcty::create() info is ", info);

        const data: object = info[sTAG];
        if ( kw.isNull(data))
        {
            console.error("kwRoutesFcty()::create() data is invalid.");
            return;
        }
        //console.info("kwRoutesFcty()::create() data is ", data);

        const routes: kwRoutes = new kwRoutes(data);
        if (!routes.init())
        {
            console.error("kwRoutesFcty::create() error initializing routes.");
            return;
        }
        //console.info("kwRoutesFcty::create() routes is ", routes);

        return routes;
    }

}

