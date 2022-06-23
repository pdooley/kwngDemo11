
/**********************************************************************
 *
 * kw/class/rslt/kwRslt.ts
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
import { kweRslt }          from "./kweRslt";
import { kwLog }            from "@kw/kwLog";
import { kwStore }          from "@kwClass/store/kwStore";
import { kwtRslt }          from "./kwtRslt";


const sDATA: string         = "D";
const sINITS: string        = "I";
const sNAME: string         = "Rslt";

export class kwRslt
{
    protected sClass: string = this.constructor.name;

    private _sIdI: string;
    private _sIdD: string;
    private _val: any;

    private bCreateTags:    boolean     = false;
    private bInit:          boolean     = false;
    private bLoadRslt:      boolean     = false;
    private bLoadIdI:       boolean     = false;
    private bLoadIdD:       boolean     = false;
    private bLoadInits:     boolean     = false;

    private bDispAll:       boolean     = false;
    private bDispIdI:       boolean     = false;
    private bDispIdD:       boolean     = false;
    private bDispVal:       boolean     = false;

    private sTag: string;
    private sTagD: string;
    private sTagI: string;

    private type: kweRslt              = kweRslt.none;


    constructor(
        private rslt: kwtRslt,
        private sParent: string,
        private view: object,
        private sDefault?: string )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get sIdI(): string          { return this._sIdI; }
    get sIdD(): string          { return this._sIdD; }
    get val(): any              { return this._val; }


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


        const rslt = this.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.is("sParent", sParent));


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        this.loadRslt();
        this.createTags();
        this.loadIdI();
        this.loadIdD();

        return true;
    }

    public loadData(data: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        const type = this.type;
        if (type !== kweRslt.data)
        {
            this._val = data;
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
        //console.log(log.called());


        const type = this.type;
        //console.info(log.is("type", type));
        if (type !== kweRslt.inits)
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
        //console.info(log.is("sTagI", this.sTagI));

        return true;
    }


    private loadRslt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadRslt");
        //console.log(log.called());

        if (this.bLoadRslt)
        {
            return true;
        }

        this.bLoadRslt = true;


        const rslt = this.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        const bDispAll = rslt.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this.bDispAll = bDispAll;


        const bDispIdI = rslt.bDispIdI;
        if (!kw.isBoolean(bDispIdI))
        {
            console.error(log.invalid("bDispIdI"));
            return false;
        }
        //console.info(log.is("bDispIdI", bDispIdI));
        this.bDispIdI = bDispIdI;


        const bDispIdD = rslt.bDispIdD;
        if (!kw.isBoolean(bDispIdD))
        {
            console.error(log.invalid("bDispIdD"));
            return false;
        }
        //console.info(log.is("bDispIdD", bDispIdD));
        this.bDispIdD = bDispIdD;


        const bDispVal = rslt.bDispVal;
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
            //console.info(log.empty("sIdI"));
            return true;
        }
        //console.info(log.is("sIdI", sIdI));
        this.sIdI = sIdI;

        this.type = kweRslt.inits;
        //console.info(log.is("type", this.type));

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

        this.type = kweRslt.data;
        //console.info(log.is("type", this.type));

        return true;
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


    private dispIdI()
    {
        if (!kw.isValid(this.sIdI)) {return;}
        if ( !(this.bDispAll || this.bDispIdI) ) {return; }
        const log: kwLog = new kwLog(this.sParent, "dispIdI");
        {console.info(log.is("sIdI for " + this.sTag, this.sIdI)); }
    }


    private dispIdD()
    {
        if (!kw.isValid(this.sIdD)) {return;}
        if ( !(this.bDispAll || this.bDispIdD) ) {return; }
        const log: kwLog = new kwLog(this.sParent, "dispIdD");
        {console.info(log.is("sIdD for " + this.sTag, this.sIdD)); }
    }


    private dispVal()
    {
        if (!kw.isValid(this.val)) {return;}
        if ( !(this.bDispAll || this.bDispVal) ) {return; }
        const log: kwLog = new kwLog(this.sParent, "dispVal");
        {console.info(log.isObj(this.sTag), this.val, "]"); }
    }


}
