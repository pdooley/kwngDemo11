
/**********************************************************************
 *
 * kw/class/attr/kwAttr.ts
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
import { kweAttr }           from "./kweAttr";
import { kwLog }             from "@kw/kwLog";
import { kwStore }           from "@kwClass/store/kwStore";
import { kwtAttr }           from "./kwtAttr";
import { kwView }            from "@kwClass/view/kwView";



export class kwAttr
{
    protected sClass: string = this.constructor.name;

    private _sIdI: string;
    private _sIdD: string;
    private _sIdV: string;
    private _val: any;

    private bInit: boolean              = false;
    private bLoadAttr: boolean          = false;
    private bLoadDefault: boolean       = false;
    private bLoadIdD: boolean           = false;
    private bLoadIdI: boolean           = false;
    private bLoadInits: boolean         = false;
    private bCreateTags: boolean        = false;
    private bLoadView: boolean          = false;

    private bDispAll: boolean           = false;
    private bDispIdI: boolean           = false;
    private bDispIdD: boolean           = false;
    private bDispIdV: boolean           = false;
    private bDispTmpl: boolean          = false;
    private bDispVal: boolean           = false;

    private sTag:  string;
    private sTagD: string;
    private sTagI: string;
    private sTagV: string;

    private type: kweAttr              = kweAttr.none;


    constructor(
        private attr:       kwtAttr,
        private sName:      string,
        private sParent:    string,
        private view:       kwView,
        private sDefault?:  string )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get sIdD(): string          { return this._sIdD; }
    get sIdI(): string          { return this._sIdI; }
    get sIdV(): string          { return this._sIdV; }
    get val(): any              { return this._val; }

    set sIdD(val: string)       { this._sIdD = val; this.dispIdD(); }
    set sIdI(val: string)       { this._sIdI = val; this.dispIdI(); }
    set sIdV(val: string)       { this._sIdV = val; this.dispIdV(); }
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


        const attr = this.attr;
        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr, "]");


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), sName, "]");


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), sParent, "]");


        const view = this.view;
        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        this.loadAttr();
        this.createTags();
        this.loadIdD();
        this.loadIdI();
        this.loadView();
        this.loadDefault();

        return true;
    }

    public loadData(data: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        const type = this.type;
        //console.info(log.is("type", type));
        if (type !== kweAttr.data)
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
        //console.log(log.called());


        const type = this.type;
        if (type !== kweAttr.inits)
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


        const sName = this.sName;
        if (!kw.isValid(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), sName, "]");


        this.sTag = "s" + sName;
        //console.info(log.is("sTag", sTag));

        this.sTagD = this.sTag + "D";
        //console.info(log.is("sTagData", sTagData));

        this.sTagI = this.sTag + "I";
        //console.info(log.is("sTagInits", sTagInits));

        this.sTagV = this.sTag + "V";
        //console.info(log.is("sTagInits", sTagInits));

        return true;
    }
    
    
    private loadAttr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttr");
         //console.log(log.called());

        if (this.bLoadAttr)
        {
            return true;
        }

        this.bLoadAttr = true;


        const attr = this.attr;
        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr, "]");


        const bDispAll = attr.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this.bDispAll = bDispAll;


        const bDispIdD = attr.bDispIdD;
        if (!kw.isBoolean(bDispIdD))
        {
            console.error(log.invalid("bDispIdD"));
            return false;
        }
        //console.info(log.is("bDispIdD", bDispIdD));
        this.bDispIdD = bDispIdD;


        const bDispIdI = attr.bDispIdI;
        if (!kw.isBoolean(bDispIdI))
        {
            console.error(log.invalid("bDispIdI"));
            return false;
        }
        //console.info(log.is("bDispIdI", bDispIdI));
        this.bDispIdI = bDispIdI;


        const bDispIdV = attr.bDispIdV;
        if (!kw.isBoolean(bDispIdV))
        {
            console.error(log.invalid("bDispIdV"));
            return false;
        }
        //console.info(log.is("bDispIdV", bDispIdV));
        this.bDispIdV = bDispIdV;


        let  bDispTmpl = attr.bDispTmpl;
        if (!kw.isBoolean(bDispTmpl))
        {
            bDispTmpl = false;
        }
        //console.info(log.is("bDispTmpl", bDispTmpl));
        this.bDispTmpl = bDispTmpl;


        const bDispVal = attr.bDispVal;
        if (!kw.isBoolean(bDispVal))
        {
            console.error(log.invalid("bDispVal"));
            return false;
        }
        //console.info(log.is("bDispVal", bDispVal));
        this.bDispVal = bDispVal;

        return true;
    }


    private loadDefault(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadType");
         //console.log(log.called());

        if (this.bLoadDefault)
        {
            return true;
        }

        this.bLoadDefault = true;

        if (
            !this.bLoadIdI  ||
            !this.bLoadIdD  ||
            !this.bLoadView     )
        {
            console.error(log.info("idI, idD, or View not loaded"));
            return false;
        }

        const type = this.type;
        if ( type !== kweAttr.none)
        {
            //console.info(log.is("type", type));
            return true;
        }
        //console.info(log.info("type is not set"));


        const sDefault = this.sDefault;
        if (!kw.isString(sDefault))
        {
            //console.info(log.empty("sDefault"));
            return true;
        }
        //console.info(log.is("sDefault", sDefault));

        this.val = sDefault;

        this.type = kweAttr.default;

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

        const sIdI = view.view[sTagI];
        if (!kw.isValid(sIdI))
        {
            //console.info(log.empty("sIdI"));
            return true;
        }
        //console.info(log.is("sIdI", sIdI));
        this.sIdI = sIdI;

        this.type = kweAttr.inits;

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

        const sIdD = view.view[sTagD];
        if (!kw.isString(sIdD))
        {
            //console.info(log.empty("sIdD"));
            return true;
        }
        //console.info(log.is("sIdD", sIdD));
        this.sIdD = sIdD;

        this.type = kweAttr.data;

        return true;
    }


    private loadView()
    {
        const log: kwLog = new kwLog(this.sClass, "loadView");
         //console.log(log.called());

        if (this.bLoadView)
        {
            return;
        }

        this.bLoadView = true;


        const view: kwView = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), view, "]");


        const sTagV = this.sTagV;
        if (!kw.isString(sTagV))
        {
            console.error(log.invalid("sTagV"));
            return;
        }
        //console.info(log.is("sTagV", sTagV));


        const val = view.view[sTagV];
        if (kw.isValid(val))
        {
            this.type = kweAttr.view;
            //console.info(log.is("val", val));
            this.val = val;
        }

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


    private dispIdV()
    {
        if ( !(this.bDispAll || this.bDispIdV) ) { return; }
        if (!kw.isString(this.sIdV)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispIdV");
        { console.info(log.is("sIdV for " + this.sTag, this.sIdV)); }
    }


    private dispVal()
    {
        if ( !(this.bDispAll || this.bDispVal) ) { return; }
        if (!kw.isValid(this.val)) { return; }
        const log: kwLog = new kwLog(this.sParent, "dispVal");
        { console.info(log.is(this.sTag, this.val)); }
    }


}
