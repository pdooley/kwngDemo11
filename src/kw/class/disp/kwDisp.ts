/**********************************************************************
 *
 * kw/class/disp/kwDisp.ts
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
import { kwLog }            from "@kw/kwLog";
import { kwtBS }            from "../BS/kwtBS";
import { kwtDisp }          from "./kwtDisp";



export class kwDisp
{
    protected sClass: string = this.constructor.name;

    private _bDispAll: boolean;
    private _bDispData: boolean;
    private _bDispDataFltr: boolean;
    private _bDispDataIn: boolean;
    private _bDispFltr: boolean;
    private _bDispId: boolean;
    private _bDispInits: boolean;
    private _bDispInitsIn: boolean;
    private _bDispTag: boolean;
    private _bDispView: boolean;
    private _bDispViewIn: boolean;

    private type: kwtDisp;


    constructor(private info: object)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get bDispAll(): boolean      { return this._bDispAll; }
    public get bDispData(): boolean     { return this._bDispData; }
    public get bDispDataFltr(): boolean { return this._bDispDataFltr; }
    public get bDispDataIn(): boolean   { return this._bDispDataIn; }
    public get bDispFltr(): boolean     { return this._bDispFltr;  }
    public get bDispId(): boolean       { return this._bDispId;  }
    public get bDispInits(): boolean    { return this._bDispInits; }
    public get bDispInitsIn(): boolean  { return this._bDispInitsIn; }
    public get bDispTag(): boolean      { return this._bDispTag; }
    public get bDispView(): boolean     { return this._bDispView; }
    public get bDispViewIn(): boolean   { return this._bDispViewIn; }


//@formatter:on


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        const info = this.info;
        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", info));

        const tBS = <kwtBS>info;
        const disp = tBS.display;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");

        this.type = <kwtDisp>disp;


        const bDispAll: boolean = this.type.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this._bDispAll = bDispAll;


        const bDispData: boolean = this.type.bDispData;
        if (!kw.isBoolean(bDispData))
        {
            console.error(log.invalid("bDispData"));
            return false;
        }
        //console.info(log.is("bDispData", bDispData));
        this._bDispData = bDispData;


        const bDispDataFltr: boolean = this.type.bDispDataFltr;
        if (!kw.isBoolean(bDispDataFltr))
        {
            console.error(log.invalid("bDispDataFltr"));
            return false;
        }
        //console.info(log.is("bDispDataFltr", bDispDataFltr));
        this._bDispDataFltr = bDispDataFltr;


        const bDispDataIn: boolean = this.type.bDispDataIn;
        if (!kw.isBoolean(bDispDataIn))
        {
            console.error(log.invalid("bDispDataIn"));
            return false;
        }
        //console.info(log.is("bDispDataIn", bDispDataIn));
        this._bDispDataIn = bDispDataIn;


        const bDispFltr: boolean = this.type.bDispFltr;
        if (!kw.isBoolean(bDispFltr))
        {
            console.error(log.invalid("bDispFltr"));
            return false;
        }
        //console.info(log.is("bDispFltr", bDispFltr));
        this._bDispFltr = bDispFltr;


        const bDispId: boolean = this.type.bDispId;
        if (!kw.isBoolean(bDispId))
        {
            console.error(log.invalid("bDispId"));
            return false;
        }
        //console.info(log.is("bDispId", bDispId));
        this._bDispId = bDispId;


        const bDispInits: boolean = this.type.bDispInits;
        if (!kw.isBoolean(bDispInits))
        {
            console.error(log.invalid("bDispInits"));
            return false;
        }
        //console.info(log.is("bDispInits", bDispInits));
        this._bDispInits = bDispInits;


        const bDispInitsIn: boolean = this.type.bDispInitsIn;
        if (!kw.isBoolean(bDispInitsIn))
        {
            console.error(log.invalid("bDispInitsIn"));
            return false;
        }
        //console.info(log.is("bDispInitsIn", bDispInitsIn));
        this._bDispInitsIn = bDispInitsIn;


        const bDispTag: boolean = this.type.bDispTag;
        if (!kw.isBoolean(bDispTag))
        {
            console.error(log.invalid("bDispTag"));
            return false;
        }
        //console.info(log.is("bDispTag", bDispTag));
        this._bDispTag = bDispTag;


        const bDispView: boolean = this.type.bDispView;
        if (!kw.isBoolean(bDispView))
        {
            console.error(log.invalid("bDispView"));
            return false;
        }
        //console.info(log.is("bDispView", bDispView));
        this._bDispView = bDispView;


        const bDispViewIn: boolean = this.type.bDispViewIn;
        if (!kw.isBoolean(bDispViewIn))
        {
            console.error(log.invalid("bDispViewIn"));
            return false;
        }
        //console.info(log.is("bDispViewIn", bDispViewIn));
        this._bDispViewIn = bDispViewIn;


        return true;
    }

    public dispData(sClass: string, val: any): void
    {
        if (!kw.isValid(val)) { return; }
        if ( !(this.bDispData || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispData");
        { console.info(log.isObj("data"), val, "]"); }
    }

    public dispDataFltr(sClass: string, val: any): void
    {
        if (!kw.isValid(val)) { return; }
        if ( !(this.bDispDataFltr || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispDataFltr");
        { console.info(log.isObj("dataFltr"), val, "]"); }
    }

    public dispDataIn(sClass: string, val: any): void
    {
        if (!kw.isValid(val)) { return; }
        if ( !(this.bDispDataIn || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispDataIn");
        { console.info(log.isObj("dataIn"), val, "]"); }
    }

    public dispFltr(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispFltr || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispFltr");
        { console.info(log.is("fltr", val)); }
    }

    public dispId(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispId || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispId");
        { console.info(log.is("id",  val)); }
    }

    public dispInits(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispInits || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispInits");
        { console.info(log.isObj("inits"), val, "]"); }
    }

    public dispInitsIn(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispInitsIn || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispInitsIn");
        { console.info(log.isObj("initsIn"), val, "]"); }
    }

    public dispView(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispView || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispView");
        { console.info(log.isObj("view"), val, "]"); }
    }

    public dispViewIn(sClass: string, val: any): void
    {
        if (kw.isNull(val)) { return; }
        if ( !(this.bDispViewIn || this.bDispAll) ) { return; }
        const log: kwLog = new kwLog(sClass, "dispViewIn");
        { console.info(log.isObj("viewIn"), val, "]"); }
    }

    toString(): string
    {
        return this.constructor.name;
    }


}
