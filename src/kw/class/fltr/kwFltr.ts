
/**********************************************************************
 *
 * kw/class/attr/kwFltr.ts
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

import { kw }                from "@kw/kw";
import { kweFltr }           from "@kwClass/fltr/kweFltr";
import { kwLog }             from "@kw/kwLog";
import { kwStore }           from "@kwClass/store/kwStore";
import { kwtFltr }           from "@kwClass/fltr/kwtFltr";
import { kwView }            from "@kwClass/view/kwView";


const sDATA: string         = "D";
const sINITS: string        = "I";
const sNAME: string         = "Fltr";

export class kwFltr
{
    protected sClass: string = this.constructor.name;

    private _data:          any;
    private _sIdI:          string;
    private _sIdD:          string;
    private _val:           any;

    private bCreateTags:    boolean     = false;
    private bInit:          boolean     = false;
    private bLoadFltr:      boolean     = false;
    private bLoadIdI:       boolean     = false;
    private bLoadIdD:       boolean     = false;
    private bLoadInits:     boolean     = false;
    private bLoadView:      boolean     = false;

    private type:           kweFltr     = kweFltr.none;

    private bDispAll:       boolean     = false;
    private bDispData:      boolean     = false;
    private bDispIdI:       boolean     = false;
    private bDispIdD:       boolean     = false;
    private bDispVal:       boolean     = false;

    private sTag:          string;
    private sTagD:         string;
    private sTagI:         string;


    constructor(
        private fltr:       kwtFltr,
        private sParent:    string,
        private view:       object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }



    get data(): any             { return this._data; }
    get sIdD(): string          { return this._sIdD; }
    get sIdI(): string          { return this._sIdI; }
    get val(): any              { return this._val; }

    set data(val: any)          { this._data = val; this.dispData(); }
    set sIdI(val: string)       { this._sIdI = val; this.dispIdI(); }
    set sIdD(val: string)       { this._sIdD = val; this.dispIdD(); }
    set val(val: any)           { this._val = val; this.dispVal(); }

//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return;
        }

        this.bInit = true;


        if (!kw.isValid(this.fltr))
        {
            console.error(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), this.fltr, "]");


        if (!kw.isValid(this.sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), this.sParent, "]");


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.is("viewIn", this.view));


        this.loadFltr();
        this.createTags();
        this.loadIdI();
        this.loadIdD();
        this.loadView();

        return true;

    }


//  data could be empty
    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        const type = this.type;
        //console.info(log.is("type", type));
        if (type !== kweFltr.data)
        {
            //console.info(log.info("type is not data"));
            return true;
        }

        const sIdD = this.sIdD;
        if (!kw.isString(sIdD))
        {
            console.error(log.invalid("sIdD"));
            return false;
        }
        //console.info(log.is("sIdD", sIdD));

        let val;

        if (kw.isValid(data))
        {
            //console.info(log.isObj("data"), data, "]");

            val = this.extractData(data, sIdD);
            if (!kw.isValid(val))
            {
                //console.info(log.invalid("data"));
                return false;
            }
            //console.info(log.isObj("val"), val, "]");
        }

        this.val = val;

        return true;
    }


    public loadInits(inits: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        console.log(log.called());


        const type = this.type;
        //console.info(log.is("type", type));
        if (type !== kweFltr.inits)
        {
            return true;
        }


        if (this.bLoadInits)
        {
            return true;
        }

        this.bLoadInits = true;


        if (!kw.isValid(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");

        const sIdI = this.sIdI;
        if (!kw.isString(sIdI))
        {
            console.error(log.empty("sIdI"));
            return false;
        }
        //console.info(log.is("sIdI", sIdI));


        const val = this.extractData(inits, sIdI);
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val, "]");


        this.val = val;

        return true;
    }


    private createTags(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTags");
        //console.log(log.called());

        if (this.bCreateTags)
        {
            return true;
        }

        this.bCreateTags = true;


        const sName = sNAME;
        if (!kw.isValid(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), sName, "]");


        this.sTag = "s" + sName;
        //console.info(log.is("sTag", this.sTag));

        this.sTagD = this.sTag + sDATA;
        //console.info(log.is("sTagD", this.sTagD));

        this.sTagI = this.sTag + sINITS;
        //console.info(log.is("sTagD", this.sTagD));

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


        const fltr = this.fltr;
        if (!kw.isValid(fltr))
        {
            console.error(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");


        const bDispAll = fltr.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this.bDispAll = bDispAll;


        const bDispIdI = fltr.bDispIdI;
        if (!kw.isBoolean(bDispIdI))
        {
            console.error(log.invalid("bDispIdI"));
            return false;
        }
        //console.info(log.is("bDispIdI", bDispIdI));
        this.bDispIdI = bDispIdI;


        const bDispIdD = fltr.bDispIdD;
        if (!kw.isBoolean(bDispIdD))
        {
            console.error(log.invalid("bDispIdD"));
            return false;
        }
        //console.info(log.is("bDispIdD", bDispIdD));
        this.bDispIdD = bDispIdD;

        const bDispVal = fltr.bDispVal;
        if (!kw.isBoolean(bDispVal))
        {
            console.error(log.invalid("bDispVal"));
            return false;
        }
        //console.info(log.is("bDispVal", bDispVal));
        this.bDispVal = bDispVal;

        return true;
    }


    private loadIdI(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadIdI");
        //console.log(log.called());

        if (this.bLoadIdI)
        {
            return true;
        }

        this.bLoadIdI = true;

        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const sTagI = this.sTagI;
        if (!kw.isString(sTagI))
        {
            console.error(log.invalid("sTagI"));
            return false;
        }
        //console.info(log.is("sTagI", sTagI));

        const sIdI = view[sTagI];
        if (!kw.isValid(sIdI))
        {
            //console.info(log.empty("sId"));
            return true;
        }
        //console.info(log.is("sId", sId));
        this.sIdI = sIdI;

        this.type = kweFltr.inits;

        return true;
    }


    private loadIdD(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadIdD");
        //console.log(log.called());

        if (this.bLoadIdD)
        {
            return true;
        }

        this.bLoadIdD = true;

        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const sTagD = this.sTagD;
        if (!kw.isString(sTagD))
        {
            console.error(log.invalid("sTagD"));
            return false;
        }
        //console.info(log.is("sTagD", sTagD));

        const sIdD = view[sTagD];
        if (!kw.isString(sIdD))
        {
            //console.info(log.empty("sIdD"));
            return true;
        }
        //console.info(log.is("sIdD", sIdD));
        this.sIdD = sIdD;

        this.type = kweFltr.data;

        return true;
    }


    private loadView()
    {
        const log: kwLog = new kwLog(this.sClass, "loadValView");
        //console.log(log.called());

        if (this.bLoadView)
        {
            return;
        }

        this.bLoadView = true;


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), view, "]");


        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return;
        }
        //console.info(log.is("sTag", sTag));


        const val = view[sTag];
        if (kw.isValid(val))
        {
            this.type = kweFltr.view;
        }
        //console.info(log.is("val", val));
        this.val = val;

        return;
    }


    protected extractData(info: any, sKey: string): any
    {
        const log: kwLog = new kwLog(this.sClass, "extractData");
        //console.log(log.called());


        if (!kw.isValid(info))
        {
            console.error(log.invalid(info));
        }
        //console.info(log.isObj("info"), info, "]");


        if (!kw.isString(sKey))
        {
            console.error(log.invalid(sKey));
        }
        //console.info(log.is("sKey", sKey));


        const data = new kwStore(info, sKey);
        if (!data.init())
        {
            console.error(log.errCreate("data"));
        }

        return data.get();
    }


    private dispData()
    {
        if ( !(this.bDispAll || this.bDispData) ) { return; }
        if (!kw.isValid(this.data)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispData");
        { console.info(log.isObj("data for " + this.sTag), this.data, "]"); }
    }


    private dispIdD()
    {
        if ( !(this.bDispAll || this.bDispIdD) ) { return; }
        if (!kw.isString(this.sIdD)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispIdD");
        { console.info(log.is("sIdD for " + this.sTag, this.sIdD)); }
    }


    private dispIdI()
    {
        if ( !(this.bDispAll || this.bDispIdI) ) { return; }
        if (!kw.isString(this.sIdI)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispIdI");
        { console.info(log.is("sIdI for " + this.sTag, this.sIdI)); }
    }


    private dispVal()
    {
        if ( !(this.bDispAll || this.bDispVal) ) { return; }
        if (!kw.isValid(this.val)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispVal");
        { console.info(log.is(this.sTag, this.val)); }
    }

}
