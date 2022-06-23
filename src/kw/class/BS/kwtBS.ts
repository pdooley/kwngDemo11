/**********************************************************************
 *
 * kw/class/api/kwtBS.ts
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
import { kwtAttr }              from "@kwClass/attr/kwtAttr";
import { kwtCred }              from "@kwClass/cred/kwtCred";
import { kwtDisp }              from "@kwClass/disp/kwtDisp";
import { kwtFltr }              from "@kwClass/fltr/kwtFltr";
import { kwtRoutes }            from "@kwClass/routes/kwtRoutes";
import { kwtRslt }              from "@kwClass/rslt/kwtRslt";
import { kwtSrvc }              from "@kwClass/srvc/kwtSrvc";
//@formatter:on


export class kwtBS
{
    apis: object;
    attrs: kwtAttr[];
    bAutoLogin: boolean;
    bTraceApp: boolean;
    bTraceRoute: boolean;
    bTraceState: boolean;
    credentials: kwtCred;
    display: kwtDisp;
    fltr: kwtFltr;
    mdls: object;
    rslt: object;
    sMode: string;
    sRedirect: string;
    routes: kwtRoutes;
    srvcs: kwtSrvc[];
}
