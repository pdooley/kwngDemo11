/**********************************************************************
 *
 * kw/ctrl/kwCtrlComp.ts
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
import {kwAttrs}                from "@kwClass/attrs/kwAttrs";
import {kwDisp}                 from "@kwClass/disp/kwDisp";
import {kwElmt}                 from "@kwClass/elmt/kwElmt";
import {kwLog}                  from "@kw/kwLog";
import {kwStDataVal}            from "@kwState/kwStDataVal";



export abstract class kwCtrlComp
{
    protected sClass: string = this.constructor.name;


    //values that are available for data binding.
    private _fltr: any;
    private _inits: any;

    // values from parent
    private kwData: any;
    private kwFltr: any;
    private kwInits: any;
    private kwView: any;

    // values used for local component

    private elmt: kwElmt;
    private disp: kwDisp;

    private bCreateElmt: boolean = false;
    private bInit: boolean = false;
    private bLoadDisp: boolean = false;
    private bLoadFltr: boolean = false;


    protected srvcAttrs: kwStDataVal;
    protected srvcDisp: kwStDataVal;
    protected srvcFltr: kwStDataVal;
    protected srvcRslt: kwStDataVal;


    protected constructor(protected sTag: string)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract getDataIn(): any;
    protected abstract initCmp(): void;
    protected abstract loadData(): void;
    protected abstract navigate(sLink: string);
    protected abstract publish($event: object);


    // hooks for components
    protected abstract parseData(data: any): void;
    protected abstract parseInits(inits: any): void;
    protected abstract parseView(view: any): void;


    // accessors

    public get attrs(): kwAttrs
    {  if (kw.isValid(this.elmt)) { return this.elmt.attrs; } }

    public get data(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.data; } }

    public get fltr(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.fltr; } }
    //{ return this._fltr; }

    public get inits(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.inits; } }
    //{ return this._inits; }

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



//@formatter:on


    protected init()
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            this.updateElmt();
            return;
        }

        if (!kw.isString(this.sTag)
            && this.sTag.length === 0  )
        {
            console.error(log.invalid("sTag"));
            return false;
        }

        if (!kw.isValid(this.srvcDisp))
        {
            //console.info(log.empty("srvcDisp"));
            return false;
        }

        if (!kw.isValid(this.srvcAttrs))
        {
            //console.info(log.empty("srvcAttrs"));
            return false;
        }


        this.loadDisp();
        this.initCmp();


        if (!this.createElmt())
        {
            console.error(log.errLoad("elmt"));
            return false;
        }

        if (!this.loadFltr())
        {
            console.error(log.errLoad("fltr"));
            return false;
        }

        this.bInit = true;

        this.kwData = this.getDataIn();
        if (kw.isValid(this.kwData))
        {
            this.updateElmt();
        }
        else
        {
            this.loadData();
        }

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


        const initsIn = this.kwInits;
        if (kw.isNull(initsIn))
        {
            console.error(log.invalid("initsIn"));
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


        const viewIn = this.kwView;
        if (kw.isNull(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), viewIn, "]");


        const srvcAttrs = this.srvcAttrs;
        if (kw.isNull(srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return false;
        }
        //console.info(log.isObj("srvcAttrs"), srvcAttrs, "]");


        const attrs = srvcAttrs.get();
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
        //console.info(log.is("fltr", fltr));


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

        disp.dispInitsIn(this.sClass, initsIn);
        disp.dispViewIn(this.sClass, viewIn);

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
        //console.info(log.is("elmt", elmt));

        this.elmt = elmt;

        disp.dispInits(this.sClass, this.inits);
        disp.dispView(this.sClass, this.view);

        this.parseInits(this.inits);
        this.parseView(this.view);

        this.bCreateElmt = true;

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
        const sLink: string = "hello";
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

    private loadFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        if (this.bLoadFltr)
        {
            return true;
        }

        this.bLoadFltr = true;

        this._fltr = this.kwFltr;

        return true;
    }


    protected storeData(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeData");

        //console.info(log.isObj("data"), data, "]");
        this.kwData = data;
        this.init();
    }

    protected storeFltr(fltr: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeFltr");

        //console.info(log.isObj("fltr"), fltr, "]");
        this.kwFltr = fltr;
        this.init();
    }

    protected storeInit(init: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeInit");

        //console.info(log.isObj("init"), init, "]");
        this.kwInits = init;
        this.init();
    }

    protected storeView(view: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeView");

        //console.info(log.isObj("view"), view, "]");
        this.kwView = view;
        this.init();
    }


    private updateElmt(): void
    {
        const log: kwLog = new kwLog(this.sClass, "updateElmt");
        //console.log(log.called());


        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return;
        }
        //console.info(log.is("disp", disp));


        if (!kw.isValid(this.elmt))
        {
            console.error(log.invalid("elmt"));
            return;
        }

        //console.info(log.is("kwData", this.kwData));

        disp.dispDataIn(this.sClass, this.kwData);

        this.elmt.loadData(this.kwData);

        disp.dispData(this.sClass, this.data);

        this.parseData(this.data);
    }



}
