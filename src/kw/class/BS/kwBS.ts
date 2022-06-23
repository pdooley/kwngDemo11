/**********************************************************************
 *
 * kw/class/bs/kwBS.ts
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

import { kw }               from "@kw/kw";
import { kwApi }            from "@kwClass/api/kwApi";
import { kwApis }           from "@kwClass/apis/kwApis";
import { kwAWS }            from "@kwClass/aws/kwAWS";
import { kwCred }           from "@kwClass/cred/kwCred";
import { kwDisp }           from "@kwClass/disp/kwDisp";
import { kwLog }            from "@kw/kwLog";
import { kwMode }           from "@kwClass/mode/kwMode";
import { kwModeFcty }       from "@kwClass/mode/kwModeFcty";
import { kwRoutes}          from "@kwClass/routes/kwRoutes";
import { kwRoutesFcty}      from "@kwClass/routes/kwRoutesFcty";
import { kwSrvcs }          from "@kwClass/srvcs/kwSrvcs";
import { kwSrvcsFcty }      from "@kwClass/srvcs/kwSrvcsFcty";
import { kwtBS }            from "./kwtBS";
import { kwtFltr }          from "@kwClass/fltr/kwtFltr";
import { kwtRslt }          from "@kwClass/rslt/kwtRslt";
import { kwTokens }         from "@kwClass/tokens/kwTokens";
import { kwTokensFcty }     from "@kwClass/tokens/kwTokensFcty";



const sBOOTSTRAP: string = "bootstrap";


export class kwBS
{
    protected sClass: string = this.constructor.name;

    _apis:      kwApis;
    _attrs:     object;
    _aws:       kwAWS;
    _BSApi:     kwApi;
    _creds:     kwCred;
    _disp:      kwDisp;
    _fltr:      kwtFltr;
    _mdls:      object;
    _mode:      kwMode;
    _rslt:      kwtRslt;
    _routes:    kwRoutes;
    _srvcs:     kwSrvcs;
    _tokens:    kwTokens;
    _views:     object;
    _type:      kwtBS;

    _sRedirect:     string;

    _bAutoLogin:    boolean;
    _bTraceApp:     boolean;
    _bTraceRoute:   boolean;
    _bTraceState:   boolean;

    constructor(private info: kwtBS)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    get apis(): kwApis              { return this._apis; }
    get attrs(): object             { return this._attrs; }
    get aws(): kwAWS                { return this._aws; }
    get bAutoLogin(): boolean       { return this._bAutoLogin; }
    get BSApi(): kwApi              { return this._BSApi; }
    get bTraceApp(): boolean        { return this._bTraceApp; }
    get bTraceRoute(): boolean      { return this._bTraceRoute; }
    get bTraceState(): boolean      { return this._bTraceState; }
    get creds(): kwCred             { return this._creds; }
    get disp(): kwDisp              { return this._disp; }
    get fltr(): kwtFltr             { return this._fltr; }
    get mdls(): object              { return this._mdls; }
    get mode(): kwMode              { return this._mode; }
    get rslt(): kwtRslt             { return this._rslt; }
    get routes(): kwRoutes          { return this._routes; }
    get srvcs(): kwSrvcs            { return this._srvcs; }
    get tokens(): kwTokens          { return this._tokens; }
    get views(): object             { return this._views; }
    get sRedirect(): string         { return this._sRedirect; }
    get type(): kwtBS               { return this._type; }

    set apis(val: kwApis)           { this._apis = val; }
    set attrs(val: object)          { this._attrs = val; }
    set aws(val: kwAWS)             { this._aws = val; }
    set bAutoLogin(val: boolean)    { this._bAutoLogin = val; }
    set BSApi(val: kwApi)           { this._BSApi = val; }
    set bTraceApp(val: boolean)     { this._bTraceApp = val; }
    set bTraceRoute(val: boolean)   { this._bTraceRoute = val; }
    set bTraceState(val: boolean)   { this._bTraceState = val; }
    set creds(val: kwCred)          { this._creds = val; }
    set disp(val: kwDisp)           { this._disp = val; }
    set fltr(val: kwtFltr)          { this._fltr = val; }
    set mdls(val: object)           { this._mdls = val; }
    set mode(val: kwMode)           { this._mode = val; }
    set rslt(val: kwtRslt)          { this._rslt = val; }
    set routes(val: kwRoutes)       { this._routes = val; }
    set sRedirect(val: string)      { this._sRedirect = val; }
    set srvcs(val: kwSrvcs)         { this._srvcs = val; }
    set tokens(val: kwTokens)       { this._tokens = val; }
    set type(val: kwtBS)            { this._type = val; }
    set views(val: object)          { this._views = val; }


//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info, "}");


        this.type = <kwtBS>this.info;


        const attrs: object = this.type.attrs;
        if (!kw.isValid(attrs))
        {
            console.error(log.errLoad("info"));
            return false;
        }
        //console.info(log.is("attrs", attrs));
        this.attrs = attrs;


        const bAutoLogin: boolean = this.type.bAutoLogin;
        if (!kw.isBoolean(bAutoLogin))
        {
            console.error(log.errLoad("bAutoLogin"));
            return false;
        }
        //console.info(log.is("bAutoLogin", bAutoLogin));
        this.bAutoLogin = bAutoLogin;


        const bTraceApp: boolean = this.type.bTraceApp;
        if (!kw.isBoolean(bTraceApp))
        {
            console.error(log.errLoad("bTraceApp"));
            return false;
        }
        //console.info(log.is("bTraceApp", bTraceApp));
        this.bTraceApp = bTraceApp;


        const bTraceRoute: boolean = this.type.bTraceRoute;
        if (!kw.isBoolean(bTraceRoute))
        {
            console.error(log.errLoad("bTraceRoute"));
            return false;
        }
        //console.info(log.is("bTraceRoute", bTraceRoute));
        this.bTraceRoute = bTraceRoute;


        const bTraceState: boolean = this.type.bTraceState;
        if (!kw.isBoolean(bTraceState))
        {
            console.error(log.errLoad("bTraceState"));
            return false;
        }
        //console.info(log.is("bTraceState", bTraceState));
        this.bTraceState = bTraceState;


        const fltr: kwtFltr = <kwtFltr>this.type.fltr;
        if (!kw.isValid(fltr))
        {
            console.error(log.errLoad("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");
        this.fltr = fltr;


        const mdls: object = this.type.mdls;
        if (kw.isNull(this.info))
        {
            console.error(log.errLoad("mdls"));
            return false;
        }
        //console.info(log.isObj("mdls"), mdls, "]");
        this.mdls = mdls;


        const rslt: kwtRslt = <kwtRslt>this.type.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.errLoad("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");
        this.rslt = rslt;


        const sRedirect: string = this.type.sRedirect;
        if (!kw.isString(sRedirect))
        {
            console.error(log.errLoad("sRedirect"));
            return false;
        }
        //console.info(log.is("sRedirect", sRedirect));
        this.sRedirect = sRedirect;


        if (!this.retrieveApis())
        {
            console.error(log.errLoad("Apis"));
            return false;
        }

        if (!this.retrieveAWS())
        {
            console.error(log.errLoad("AWS"));
            return false;
        }

        if (!this.retrieveBSApi())
        {
            console.error(log.errLoad("BSApi"));
            return false;
        }


        if (!this.retrieveCreds())
        {
            console.error(log.errLoad("creds"));
            return false;
        }


        if (!this.retrieveDisp())
        {
            console.error(log.errLoad("disp"));
            return false;
        }


        if (!this.retrieveMode())
        {
            console.error(log.errLoad("info"));
            return false;
        }


        if (!this.retrieveRoutes())
        {
            console.error(log.errLoad("routes"));
            return false;
        }


        if (!this.retrieveSrvcs())
        {
            console.error(log.errLoad("srvcs"));
            return false;
        }


        if (!this.retrieveTokens())
        {
            console.error(log.errLoad("tokens"));
            return false;
        }

        return true;
    }

    retrieveApis(): boolean
    {
        //console.log("kwBS::retrieveApis() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveApis() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveApis() info is ", this.info);

        const apis: kwApis = new kwApis(this.info);
        if (!apis.init())
        {
            console.error("kwBS::retrieveApis() error creating apis.");
            return false;
        }
        //console.info("kwBS::retrieveApis() apis is ", apis);
        this.apis = apis;

        return true;
    }

    retrieveAWS(): boolean
    {
        //console.log("kwBS::retrieveAWS() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveAWS() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveAWS() info is ", this.info);

        const aws: kwAWS = new kwAWS(this.info);
        if (!aws.init())
        {
            console.error("kwBS::retrieveAWS() error creating aws.");
            return false;
        }
        //console.info("kwBS::retrieveAWS() aws is ", aws);
        this.aws = aws;

        return true;
    }

    retrieveBSApi(): boolean
    {
        //console.log("kwBS::retrieveApis() is called.");

        if (kw.isNull(this.apis))
        {
            console.error("kwBS::retrieveBSApi() apis is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveBSApi() apis is ", this.apis);

        const api: kwApi = this.apis.getApi(sBOOTSTRAP);
        if (!kwApi.is(api))
        {
            console.error("kwBS::retrieveBSApi() error creating api.");
            return false;
        }
        //console.info("kwBS::retrieveBSApi() api is ", api);
        this.BSApi = api;

        return true;
    }

    retrieveCreds(): boolean
    {
        //console.log("kwBS::retrieveCreds() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveCreds() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveCreds() info is ", this.info);

        const creds: kwCred = new kwCred(this.info);
        if (!creds.init())
        {
            console.error("kwBS::retrieveCreds() error creating creds.");
            return false;
        }
        //console.info("kwBS::retrieveCreds() creds is ", creds);
        this.creds = creds;

        return true;
    }


    retrieveDisp(): boolean
    {
        //console.log("kwBS::retrieveDisp() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveDisp() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveDisp() info is ", this.info);

        const disp: kwDisp = new kwDisp(this.info);
        if (!disp.init())
        {
            console.error("kwBS::retrieveDisp() error creating disp.");
            return false;
        }
        //console.info("kwBS::retrieveDisp() disp is ", disp);
        this.disp = disp;

        return true;
    }


    retrieveMode(): boolean
    {
        //console.log("kwBS::retrieveMode() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveMode() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveMode() info is ", this.info);

        const mode: kwMode = kwModeFcty.create(this.info);
        if (!kwMode.is(mode))
        {
            console.error("kwBS::retrieveMode() error creating mode.");
            return false;
        }
        //console.info("kwBS::retrieveMode() mode is ", mode);
        this.mode = mode;

        return true;
    }


    retrieveRoutes(): boolean
    {
        //console.log("kwBS::retrieveRoutes() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveRoutes() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveRoutes() info is ", this.info);

        const routes: kwRoutes = kwRoutesFcty.create(this.info);
        if (!kwRoutes.is(routes))
        {
            console.error("kwBS::retrieveRoutes() error creating routes.");
            return false;
        }
        //console.info("kwBS::retrieveRoutes() routes is ", routes);
        this.routes = routes;

        return true;
    }

    retrieveSrvcs(): boolean
    {
        //console.log("kwBS::retrieveSrvcs() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveSrvcs() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveSrvcs() info is ", this.info);

        const srvcs: kwSrvcs = kwSrvcsFcty.create(this.info);
        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwBS::retrieveSrvcs() error creating srvcs.");
            return false;
        }
        //console.info("kwBS::retrieveSrvcs() srvcs is ", srvcs);
        this.srvcs = srvcs;

        return true;
    }

    retrieveTokens(): boolean
    {
        //console.log("kwBS::retrieveTokens() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwBS::retrieveTokens() info is invalid.");
            return false;
        }
        //console.info("kwBS::retrieveTokens() info is ", this.info);

        const tokens: kwTokens = kwTokensFcty.create(this.info);
        if (!kwTokens.is(tokens))
        {
            console.error("kwBS::retrieveTokens() error creating tokens.");
            return false;
        }
        //console.info("kwBS::retrieveTokens() tokens is ", tokens);
        this.tokens = tokens;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBS)
    }

}

