/**********************************************************************
 *
 * kw/class/kwStMsgFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import { kw }                        from '@kw/kw';
import { kwApi }                    from "@kwClass/api/kwApi";
import { kwMsg }                    from "@kwClass/msg/kwMsg";
import { kwMsgType }                from "@kwClass/msg/kwMsgType";
import { kwMsgAdd }                 from "@kwClass/msg/kwMsgAdd";
import { kwMsgDelete }              from "@kwClass/msg/kwMsgDelete";
import { kwMsgEdit }                from "@kwClass/msg/kwMsgEdit";
import { kwMsgGet }                 from "@kwClass/msg/kwMsgGet";
import { kwStApi }                  from "./kwStApi";
import { kwStDataMap }              from "./kwStDataMap";
import { kwSrvcMap }                from "@kwClass/srvc/kwSrvcMap";
import { kwTokenMap }               from "@kwClass/token/kwTokenMap";
//@formatter:off


export class kwStMsgFcty
{
    protected sClass: string = this.constructor.name;

    api: kwApi;
    srvcs: kwSrvcMap;
    tokens: kwTokenMap;

    constructor(
        private srvcApi: kwStApi,
        private srvcSrvcs: kwStDataMap,
        private srvcTokens: kwStDataMap     )
    {
        //console.log(this.sClass, "::constructor() is called.");
    }

    init(): boolean
    {
        //console.log(this.sClass, "::init() called.");

        if (    kwApi.is(this.api)
        &&      kwSrvcMap.is(this.srvcs)
        &&      kwTokenMap.is(this.tokens)   )
        {
            return true;
        }

        if (!kwStApi.is(this.srvcApi))
        {
            console.error(this.sClass, "::init() srvcApi is invalid.");
            return false;
        }

        if (!kwStDataMap.is(this.srvcSrvcs))
        {
            console.error(this.sClass, "::init() srvcSrvcs is invalid.");
            return false;
        }

        if (!kwStDataMap.is(this.srvcTokens))
        {
            console.error(this.sClass, "::init() srvcTokens is invalid.");
            return false;
        }

        const api: kwApi = this.srvcApi.get();
        if (!kwApi.is(api))
        {
            console.error(this.sClass, "::init() api is invalid.");
            return;
        }
        this.api = api;

        const srvcs: kwSrvcMap = <kwSrvcMap>this.srvcSrvcs.getMap();
        if (!kwSrvcMap.is(srvcs))
        {
            console.error(this.sClass, "::init() srvcs is invalid.");
            return false;
        }
        this.srvcs = srvcs;

        const tokens: kwTokenMap = <kwTokenMap>this.srvcTokens.getMap();
        if (!kwTokenMap.is(tokens))
        {
            console.error(this.sClass, "::init() tokens is invalid.");
            return false;
        }
        this.tokens = tokens;

        return true;
    }

    add(data: object, params: object): kwMsg
    {
        //console.log(this.sClass, "::add() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::add() error initializing.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error(this.sClass, "::add() data is invalid.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error(this.sClass, "::add() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: data,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgAdd(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::add() error creating msg.");
            return;
        }

        return msg;
    }

    del(params: object): kwMsg
    {
        //console.log(this.sClass, "::del() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::del() error initializing.");
            return;
        }

        if (kw.isNull(params))
        {
            console.error(this.sClass, "::del() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: null,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgDelete(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::del() error creating msg.");
            return;
        }

        return msg;
    }

    edit(data: object, params: object): kwMsg
    {
        //console.log(this.sClass, "::edit() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::edit() error initializing.");
            return;
        }

        if (kw.isNull(data))
        {
            console.error(this.sClass, "::edit() data is invalid.");
            return;
        }


        if (kw.isNull(params))
        {
            console.error(this.sClass, "::edit() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: data,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgEdit(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::edit() error creating msg.");
            return;
        }

        return msg;
    }

    get(params: object): kwMsg
    {
        //console.log(this.sClass, "::get() called.");

        if (!this.init())
        {
            console.error(this.sClass, "::get() error initializing.");
            return;
        }

        if (!kw.isArray(params))
        {
            console.error(this.sClass, "::get() params is invalid.");
            return;
        }

        const type: kwMsgType = {
            api: this.api,
            data: null,
            params: params,
            srvcs: this.srvcs,
            tokens: this.tokens,
        }

        const msg: kwMsg = new kwMsgGet(type);
        if (!msg.init())
        {
            console.error(this.sClass, "::get() error creating msg.");
            return;
        }

        return msg;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwStMsgFcty)
    }

}
