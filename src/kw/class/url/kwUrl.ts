/**********************************************************************
 *
 * kw/class/url/kwUrl.ts
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
import {kw }                   from "@kw/kw";
import {kwAjax }               from "@kwClass/ajax/kwAjax";
import {kwParam }              from "@kwClass/param/kwParam";
import {kwSrvc }               from "@kwClass/srvc/kwSrvc";
import {kwSrvcMap }            from "@kwClass/srvc/kwSrvcMap";
import {kwUrlType }            from "./kwUrlType";

export class kwUrl
{
    private ajax: kwAjax;
    private params: kwParam[];
    private srvc: kwSrvc;
    private srvcs: kwSrvcMap;

    private sHost: string;
    private sPath: string;
    private sProtocol: string;
    private sTempl: string;

    private nPort: number;

    private _sUrl: string;


    static is(obj: object): boolean
    {
        return kw.is(obj, kwUrl);
    }


    constructor(
        private type: kwUrlType   )
    {
        //console.log("kwUrl::constructor() is called.");
    }


    public get sUrl(): string { return this._sUrl; }


//@formatter:on

    init()
    {
        //console.log("kwUrl::init() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwOptions::init() type is not valid.");
            return false;
        }
        //console.info("kwOptions::init() type is ", this.type);

        const ajax: kwAjax = this.type.ajax;
        if (!kwAjax.is(ajax))
        {
            console.error("kwUrl::init() ajax is invalid");
            return false;
        }
        //console.info("kwOptions::init() ajax is ", ajax);
        this.ajax = ajax;

        const srvcs: kwSrvcMap = this.type.srvcs;
        if (!kwSrvcMap.is(srvcs))
        {
            console.error("kwUrl::init() srvcs is invalid");
            return false;
        }
        //console.info("kwOptions::init() srvcs is ", srvcs);
        this.srvcs = srvcs;

        const params = this.type.params;
        if (kw.isNull(params))
        {
            console.error("kwOptions::init() params is not valid.");
            return false;
        }
        //console.info("kwOptions::init() params is ", params);
        this.params = params;

        if (!kw.isArray(this.params))
        {
            console.error("kwUrl::init() params is invalid");
            return false;
        }

        if (!this.retrieveSrvc())
        {
            console.error("kwUrl::init() error retrieving srvc");
            return false;
        }

        if (!this.retrieveHost())
        {
            console.error("kwUrl::init() error retrieving host");
            return false;
        }

        if (!this.retrievePort())
        {
            console.error("kwUrl::init() error retrieving port");
            return false;
        }

        if (!this.retrieveProtocol())
        {
            console.error("kwUrl::init() error retrieving protocol");
            return false;
        }

        if (!this.retrieveTemplate())
        {
            console.error("kwUrl::init() error retrieving template");
            return false;
        }

        if (!this.createPath())
        {
            console.error("kwUrl::init() error creating path");
            return false;
        }

        if (!this.createUrl())
        {
            console.error("kwUrl::init() error creating url");
            return false;
        }

        return true;
    }

    createPath(): boolean
    {
        //console.log("kwUrl::createPath() called.");

        if (!kw.isArray(this.params))
        {
            console.error("kwUrl::createPath() params is invalid");
            return false;
        }
        //console.info("kwUrl::createPath() params is ", params);

        if (!kw.isString(this.sTempl))
        {
            console.error("kwUrl::createPath() sTemplate is invalid");
            return false;
        }
        //console.info("kwUrl::createPath() sTemplate is ", this.sTemplate);

        const nLength = this.params.length;
        if ( length === 0 )
        {
            //console.info("kwUrl::createPath() params is empty");
        }

        let sPath: string = this.sTempl;

        for (let i = 0; i < nLength; i++ )
        {
            const param: kwParam = this.params[ i ];
            //console.info("kwUrl::createPath() param is ", param);

            const sParam = param.toString();
            if (!kw.isString(sParam))
            {
                console.error("kwUrl::createPath() sParam is invalid");
                return false;
            }
            //console.info("kwUrl::createPath() sParam is ", sParam);

            sPath = sPath.replace('[' + i + ']', sParam);
        }

        //console.info("kwUrl::createPath() sPath is ", sPath);
        this.sPath = sPath;

        return true;
    }

    createUrl()
    {
        //console.log("kwUrl::createUrl() called.");

        if (!kw.isString(this.sPath))
        {
            console.error("kwUrl::createUrl() sPath is invalid");
            return false;
        }
        //console.info("kwUrl::createUrl() sPath is ", this.sPath);


        let sUrl = "";

        if (!kw.isString(this.sHost))
        {
            //console.info("kwUrl::createUrl() sHost is empty");
            sUrl = "./" + this.sPath;

            //console.info("kwUrl::createUrl() sUrl is ", sUrl);

            this._sUrl = sUrl;

            return true;
        }

        if (!kw.isString(this.sProtocol))
        {
            console.error("kwUrl::createUrl() sProtocol is invalid");
            return false;
        }
        //console.info("kwUrl::createUrl() sProtocol is ", this.sProtocol);

        sUrl = this.sProtocol + "://" + this.sHost + "/" + this.sPath;

        //console.info("kwUrl::createUrl() sUrl is ", sUrl);

        this._sUrl = sUrl;

        return true;
    }

    retrieveHost(): boolean
    {
        //console.log("kwUrl::retrieveHost() called.");

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrieveHost() srvc is empty.");
            return true;
        }

        const sHost: string = this.srvc.sHost;
        if (!kw.isString(sHost))
        {
            //console.info("kwUrl::retrieveHost() sHost is empty.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() sHost is ", sHost);
        this.sHost = sHost;

        return true;
    }

    retrievePort(): boolean
    {
        //console.log("kwUrl::retrievePort() called.");

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrievePort() srvc is empty.");
            return true;
        }

        const nPort: number = this.srvc.nPort;
        if (!kw.isNumber(nPort))
        {
            //console.info("kwUrl::retrievePort() nPort is empty.");
            return false;
        }
        //console.info("kwUrl::retrievePort() nPort is ", nPort);
        this.nPort = nPort;

        return true;
    }

    retrieveProtocol(): boolean
    {
        //console.log("kwUrl::retrieveProtocol() called.");

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrieveProtocol() srvc is empty.");
            return true;
        }

        const sProtocol: string = this.srvc.sProtocol;
        if (!kw.isString(sProtocol))
        {
            //console.info("kwUrl::retrieveProtocol() sProtocol is empty.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() sProtocol is ", sProtocol);
        this.sProtocol = sProtocol;

        return true;
    }

    retrieveSrvc(): boolean
    {
        //console.log("kwUrl::retrieveSrvc() called.");

        if (kw.isNull(this.srvcs))
        {
            console.error("kwOptions::retrieveSrvc() ajax is not valid.");
            return false;
        }

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwOptions::retrieveSrvc() ajax is invalid");
            return false;
        }

        const sSrvc: string = this.ajax.sSrvc;
        if (!kw.isString(sSrvc))
        {
            //console.info("kwUrl::retrieveSrvc() sSrvc is empty");
            return true;
        }
        //console.info("kwUrl::retrieveSrvc() sSrvc is ", sSrvc);

        const info: object = this.srvcs.getByCode(sSrvc);
        if (kw.isNull(info))
        {
            console.error("retrieveSrvc::retrieveSrvc() error retrieving info.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() info is ", info);

        const srvc: kwSrvc = new kwSrvc(info);
        if (!srvc.init())
        {
            console.error("retrieveSrvc::retrieveSrvc() error creating srvc.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() srvc is ", srvc);
        this.srvc = srvc;

        return true;
    }

    retrieveTemplate(): boolean
    {
        //console.log("kwUrl::retrieveTemplate() called.");

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwUrl::retrieveTemplate() ajax is invalid.");
            return false;
        }

        const sTempl = this.ajax.sTmpl;
        if (!kw.isString(sTempl))
        {
            console.error("kwUrl::retrieveTemplate() sTempl is invalid");
            return false;
        }
        //console.info("kwUrl::retrieveTemplate() sTempl is ", sTempl);
        this.sTempl = sTempl;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

}
