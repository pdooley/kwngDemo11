/**********************************************************************
 *
 * kw/ctrl/kwCtrlMdl.ts
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
import { kwMap }            from "@kwClass/kwMap";
import { kwMdl }            from "@kwClass/mdl/kwMdl";
import { kwMdlFcty }        from "@kwClass/mdl/kwMdlFcty";
import { kwMdls }           from "@kwClass/mdls/kwMdls";
import { kwStDataList }     from "@kwState/kwStDataList";
import { kwStDataMap }      from "@kwState/kwStDataMap";
import { kwStMdl }          from "@kwState/kwStMdl";
import { kwtMdl }           from "@kwClass/mdl/kwtMdl";

//@formatter:off


export class kwCtrlMdl
{
    protected sClass: string = this.constructor.name;

    mdls: kwMdls;
    currMap: kwMap;
    langMap: kwMap;
    tZMap: kwMap;

    constructor(
        private srvcMdl: kwStMdl,
        protected srvcMdls: kwStDataList,
        private sState: string,
        private currs: kwStDataMap,
        private langs: kwStDataMap,
        private tZs: kwStDataMap    )
    {
        //console.log("kwCtrlMdl::constructor() called");
    }

    protected init(): boolean
    {
        //console.log("kwCtrlMdl::init() called");

        if (!kwStDataMap.is(this.currs))
        {
            console.error("kwCtrlMdl::init() currs is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::init() currs is ", this.currs);

        if (!kwStDataMap.is(this.langs))
        {
            console.error("kwCtrlMdl::init() langs is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::init() langs is ", this.langs);

        if (!kwStDataMap.is(this.tZs))
        {
            console.error("kwCtrlMdl::init() tZs is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::init() tZs is ", this.tZs);

        return true;
    }

    protected load()
    {
        //console.log("kwCtrlMdl::loadMdl() called");
        if (!kw.isString(this.sState))
        {
            console.error("kwCtrlMdl::load() sState is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::load() sState is ", this.sState);

        if (kw.isNull(this.srvcMdls))
        {
            console.error("kwCtrlMdl::load() srvcMdls is invalid");
            return false;
        }

        if (!this.loadCurrMap())
        {
            console.error("kwCtrlMdl::create() currMap is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::create() currMap is ", this.currMap);

        if (!this.loadLangMap())
        {
            console.error("kwCtrlMdl::create() langMap is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::create() langMap is ", this.langMap);

        if (!this.loadTZMap())
        {
            console.error("kwCtrlMdl::create() tZMap is invalid");
            return false;
        }
        //console.info("kwCtrlMdl::create() tZMap is ", this.tZMap);

        const data: object = this.srvcMdls.getFirst();
        if (kw.isNull(data))
        {
            console.error("kwCtrlMdl::load() data is invalid.");
            return false;
        }
        //console.info("kwCtrlMdl::load() data is ", data);

        const val: kwtMdl = data[this.sState];
        if (kw.isNull(val))
        {
            console.error("kwCtrlMdl::load() mdl for [", this.sState, "] is not provided.");
            return false;
        }
        //console.info("kwCtrlMdl::load() val is ", val);

        const mdl: kwMdl = kwMdlFcty.create(val, this.currMap, this.langMap, this.tZMap);
        if (!kwMdl.is(mdl))
        {
            console.error("kwCtrlMdl::load() error creating mdl.");
            return false;
        }
        //console.info("kwCtrlMdl::load() mdl is ", mdl);
        this.srvcMdl.change(mdl);

        return true;
    }

    private loadCurrMap(): boolean
    {
        //console.log("kwCtrlMdl::loadCurrMap() called");

        if (kwMap.is(this.currMap))
        {
            return true;
        }

        const currMap = this.currs.getMap();
        if (!kwMap.is(currMap))
        {
            console.error("kwCtrlMdl::loadCurrMap() error retrieving currMap");
            return false;
        }
        //console.info("kwCtrlMdl::loadCurrMap() currMap is ", currMap);
        this.currMap = currMap;

        return true;
    }

    private loadLangMap(): boolean
    {
        //console.log("kwCtrlMdl::loadLangMap() called");

        if (kwMap.is(this.langMap))
        {
            return true;
        }

        const langMap = this.langs.getMap();
        if (!kwMap.is(langMap))
        {
            console.error("kwCtrlMdl::loadLangMap() error retrieving langMap");
            return false;
        }
        //console.info("kwCtrlMdl::loadLangMap() langMap is ", langMap);
        this.langMap = langMap;

        return true;
    }

    private loadTZMap(): boolean
    {
        //console.log("kwCtrlMdl::loadTzMap() called");

        if (kwMap.is(this.tZMap))
        {
            return true;
        }

        const tZMap = this.tZs.getMap();
        if (!kwMap.is(tZMap))
        {
            console.error("kwCtrlMdl::loadTzMap() error retrieving tZMap");
            return false;
        }
        //console.info("kwCtrlMdl::loadTzMap() tZMap is ", tZMap);
        this.tZMap = tZMap;

        return true;
    }

}
