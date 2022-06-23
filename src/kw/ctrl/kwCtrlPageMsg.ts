/**********************************************************************
 *
 * kw/ctrl/kwCtrlPage.ts
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

import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwCtrlPage}                 from "./kwCtrlPage";
import {kwStDataList}               from "@kwState/kwStDataList";
import {kwStDataVal}                from "@kwState/kwStDataVal";


export abstract class kwCtrlPageMsg extends kwCtrlPage
{

    // available to bind to - depending on view settings

    private bLoadData: boolean      = false;
    private bLoadFltr: boolean      = false;
    private bLoadPage: boolean      = false;

    private fltrData: any;
    protected fltrVal: any;


    protected constructor(
        srvcInit: kwStDataVal,
        srvcView: kwStDataVal,
        protected srvcData: kwStDataList)
    {
        super(srvcInit, srvcView);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



    protected abstract loadPageData(): void;

    // hooks for components
    protected abstract parseData(data: any): void;


//@formatter:on


    protected initPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initPage");
        //console.log(log.called());

        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return false;
        }

        return true;
    }


    private loadData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        if (this.bLoadData)
        {
            return;
        }

        const fltrVal = this.fltrVal;
        if (kw.isValid(fltrVal))
        {
            //console.info(log.is("fltrVal", fltrVal));

            if (!this.loadPageData())
            {
                console.error(log.errLoad("data"));
                return false;
            }
            //console.info(log.successLoad("data"));

            this.bLoadData = true;

            return true;
        }
        //console.info(log.empty("fltrVal"));


        if (!this.loadFltr())
        {
            console.error(log.errLoad("fltr"));
            return false;
        }

        if (!this.loadPageData())
        {
            console.error(log.errLoad("data"));
            return false;
        }

        this.bLoadData = true;

        return true;
    }


    private loadFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        if (this.bLoadFltr)
        {
            return true;
        }


        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");

        const elmt = this.elmt;
        if (!kw.isValid(elmt))
        {
            console.error(log.invalid("elmt"));
            return false;
        }
        //console.info(log.isObj("elmt"), elmt, "]");

        const fltrData = this.fltrData;
        if (!kw.isValid(fltrData))
        {
            console.error(log.invalid("fltrData"));
            return false;
        }
        //console.info(log.isObj("fltrData"), fltrData, "]");

        disp.dispDataFltr(this.sClass, fltrData);

        if (!elmt.loadFltr(fltrData))
        {
            console.error(log.errLoad("fltr"));
            return false;
        }
        //console.info(log.isObj("elmt"), elmt, "]");


        const fltrVal = elmt.fltr.val;
        if (!kw.isValid(fltrVal))
        {
            console.error(log.invalid("fltrVal"));
            console.error(log.errLoad("Data"));
            return false;
        }
        //console.info(log.is("fltrVal", fltrVal));
        this.fltrVal = fltrVal;

        disp.dispFltr(this.sClass, fltrVal);

        this.bLoadFltr = true;

        return true;
    }

    protected loadPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadPage");
        //console.log(log.called());

        if (this.bLoadPage)
        {
            return;
        }

        if (!this.loadData())
        {
            console.error(log.errLoad("data"));
            return false;
        }

        this.bLoadPage = true;

        return true;
    }


    protected storeFltrData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "storeFltrData");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data, "]");

        this.fltrData = data;

        this.loadPageData();
    }


    protected storeFltr(fltr: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "storeFltr");
        //console.log(log.called());

        //console.info(log.is("fltr", fltr));

        this.fltrVal = fltr;

        this.loadPageData();
    }


    protected storeMaster(data): void
    {
        const log: kwLog = new kwLog(this.sClass, "storeMaster");
        //console.log(log.called());

        //console.info(log.isObj("data"), data, "]");

        this.updateElmt(data);

        return;
    }

}
