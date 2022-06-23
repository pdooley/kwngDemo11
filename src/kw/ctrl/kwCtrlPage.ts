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

import {kw}                     from "@kw/kw";
import {kwDisp}                 from "@kwClass/disp/kwDisp";
import {kwElmt}                 from "@kwClass/elmt/kwElmt";
import {kwLog}                  from "@kw/kwLog";
import {kwStDataVal}            from "@kwState/kwStDataVal";


const sTAG: string = "";

export abstract class kwCtrlPage
{
    protected sClass: string = this.constructor.name;


    // values injected or retrieved
    private initsIn: any;
    private viewIn: any;


    // value used for local component
    protected elmt: kwElmt;

    // value used for determining what to display
    protected disp: kwDisp;


    private bCreateElmt: boolean = false;
    private bInit: boolean = false;
    private bLoadDisp: boolean = false;
    private bLoadInits: boolean = false;
    private bLoadView: boolean = false;


    protected srvcAttrs: kwStDataVal;
    protected srvcDisp: kwStDataVal;
    protected srvcFltr: kwStDataVal;
    protected srvcRslt: kwStDataVal;

    private sTag: string = sTAG;

    protected constructor(
        protected srvcInit: kwStDataVal,
        protected srvcView: kwStDataVal)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract loadPage(): boolean;
    protected abstract navigate(sLink: string);
    protected abstract onChanged($event): void;
    protected abstract publish($event: object);


    // hooks for components
    protected abstract initPage(): void;
    protected abstract parseInits(inits: any): void;
    protected abstract parseView(view: any): void;
    protected abstract parseData(data: any): void;


    // accessors
    public get attrs(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.attrs; } }

    public get data(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.data; } }

    public get fltr(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.fltr; } }

    public get inits(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.inits; } }

    public get view(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.view; } }

    public get sComp(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sComp; } }

    public get sId(): string
    {  if (kw.isValid(this.elmt)) { return this.elmt.sId; } }

    public get sLink(): string
    { if (kw.isValid(this.elmt)) {  return this.elmt.sLink; } }

    public get sStyl(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sText; } }

    //public get fltr(): string
    // { if (kw.isValid(this.elmt))  { return this.elmt.fltr; } }


//@formatter:on

    protected init(): void
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
             return;
        }

        if (kw.isNull(this.srvcAttrs))
        {
            //console.info(log.empty("srvcAttrs"));
            return;
        }

        if (kw.isNull(this.srvcDisp))
        {
            //console.info(log.empty("srvcDisp"));
            return;
        }

        if (kw.isNull(this.srvcInit))
        {
            console.error(log.invalid("srvcInit"));
            return;
        }

        if (kw.isNull(this.srvcView))
        {
            console.error(log.invalid("srvcView"));
            return;
        }

        this.loadDisp();
        this.initPage();

        if (!this.loadInits())
        {
            console.error(log.errLoad("inits"));
            return;
        }

        if (!this.loadView())
        {
            console.error(log.errLoad("view"));
            return;
        }

        if (!this.createElmt())
        {
            console.error(log.errCreate("elmt"));
            return;
        }

        if (!this.load())
        {
            console.error(log.info("error loading"));
            return;
        }

        this.bInit = true;
    }


    private createElmt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createElmt");
        //console.log(log.called());

        if (this.bCreateElmt)
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


        const initsIn = this.initsIn;
        if (kw.isNull(initsIn))
        {
            //console.info(log.empty("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");


        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", sTag));


        const viewIn = this.viewIn;
        if (kw.isNull(viewIn))
        {
            //console.info(log.empty("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), viewIn, "]");


        const srvcAttrs = this.srvcAttrs;
        if (kw.isNull(srvcAttrs))
        {
            //console.info(log.empty("srvcAttrs"));
            return false;
        }
        //console.info(log.isObj("srvcAttrs"), srvcAttrs, "]");


        const attrs = this.srvcAttrs.get();
        if (!kw.isValid(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        const srvcFltr = this.srvcFltr;
        if (kw.isNull(srvcFltr))
        {
            //console.info(log.empty("srvcFltr"));
            return false;
        }
        //console.info(log.isObj("srvcFltr"), srvcFltr, "]");


        const fltr = srvcFltr.get();
        if (!kw.isValid(fltr))
        {
            console.error(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");


        const srvcRslt = this.srvcRslt;
        if (kw.isNull(srvcRslt))
        {
            //console.info(log.empty("srvcRslt"));
            return false;
        }
        //console.info(log.isObj("srvcRslt"), srvcRslt, "]");

        const rslt = srvcRslt.get();
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        const elmt = new kwElmt(
            attrs,
            disp,
            fltr,
            initsIn,
            rslt,
            this.sClass,
            sTag,
            viewIn);

        if (!elmt.init())
        {
            console.error(log.errCreate("elmt"));
            return false;
        }
        //console.info(log.isObj("elmt"), elmt, "]");

        this.elmt = elmt;

        this.bCreateElmt = true;

        disp.dispInits(this.sClass, this.inits);
        disp.dispView(this.sClass, this.view);

        this.parseInits(this.inits);
        this.parseView(this.view);

        return true;
    }


    protected handleEvent($event)
    {
        const log: kwLog = new kwLog(this.sClass, "handleEvent");
        //console.log(log.called());

        if (!kw.isValid($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        //console.info(log.is("$event", $event));

        //const sDataId: string = this.getDataId();

        //const sLink: string = this.sLink;
        const sLink = "hello";
        if (kw.isString(sLink))
        {
            //console.info(log.is("sLink", sLink));

            this.navigate(sLink);
            return;
        }

        const event = {};

        //console.info(log.is("event", event));
        this.publish(event);
    }


    private load(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        return this.loadPage();
    }


    private loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        //console.log(log.called());

        if (this.bLoadDisp)
        {
            return;
        }

        this.bLoadDisp = true;

        const disp = <kwDisp> this.srvcDisp.get();
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.is("disp", disp));

        this.disp = disp;

        return true;
    }


    private loadInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "storeInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return true;
        }

        this.bLoadInits = true;

        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return;
        }

        const srvcInit = this.srvcInit;
        if (!kw.isValid(srvcInit))
        {
            console.error(log.invalid("srvcInit"));
            return false;
        }
        //console.info(log.isObj("srvcInit"), srvcInit, "]");

        const initsIn = srvcInit.get();
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");

        disp.dispInitsIn(this.sClass, initsIn);

        this.initsIn = initsIn;

        return true;
    }


    private loadView(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "storeView");
        //console.log(log.called());

        if (this.bLoadView)
        {
            return true;
        }

        this.bLoadView = true;

        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return;
        }

        const srvcView = this.srvcView;
        if (!kw.isValid(srvcView))
        {
            console.error(log.invalid("srvcView"));
            return false;
        }
        //console.info(log.isObj("srvcView"), srvcView, "]");

        const viewIn = srvcView.get();
        if (!kw.isValid(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), viewIn, "]");

        disp.dispViewIn(this.sClass, viewIn);

        this.viewIn = viewIn;

        return true;
    }


    protected updateElmt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "updateElmt");
        //console.log(log.called());

        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return;
        }

        const elmt = this.elmt;
        if (!kw.isValid(elmt))
        {
            console.error(log.invalid("elmt"));
            return;
        }

        //console.info(log.isObj("data"), data, "]");

        disp.dispDataIn(this.sClass, data);

        this.elmt.loadData(data);

        disp.dispData(this.sClass, this.data);

        this.parseData(this.data);
    }


}
