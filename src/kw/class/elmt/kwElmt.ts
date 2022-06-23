
/**********************************************************************
 *
 * kw/class/attr/kwElmt.ts
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
import { kwtAttr }           from "@kwClass/attr/kwtAttr";
import { kwAttrs }           from "@kwClass/attrs/kwAttrs";
import { kwDisp }            from "@kwClass/disp/kwDisp";
import { kwFltr }            from "@kwClass/fltr/kwFltr";
import { kwInits }           from "@kwClass/inits/kwInits";
import { kwLog }             from "@kw/kwLog";
import { kwRslt }            from "@kwClass/rslt/kwRslt";
import { kwTag }             from "@kwClass/tag/kwTag";
import { kwtFltr }           from "@kwClass/fltr/kwtFltr";
import { kwtRslt }           from "@kwClass/rslt/kwtRslt";
import { kwView }            from "@kwClass/view/kwView";



export class kwElmt
{
    protected sClass: string = this.constructor.name;

    private _attrs:     kwAttrs;
    private _fltr:      kwFltr;
    private _inits:     kwInits;
    private _rslt:      kwRslt;
    private _tag:       kwTag;
    private _view:      kwView;

    private bInit: boolean          = false;
    private bCreateAttrs: boolean   = false;
    private bCreateFltr: boolean    = false;
    private bCreateInits: boolean   = false;
    private bCreateRslt: boolean    = false;
    private bCreateTag: boolean     = false;
    private bCreateView: boolean    = false;


    constructor(
        private attrsIn:    kwtAttr[],
        private disp:       kwDisp,
        private fltrIn:     kwtFltr,
        private initsIn:    any,
        private rsltIn:     kwtRslt,
        private sParent:    string,
        private sTag:       string,
        private viewIn:     object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get attrs(): kwAttrs
    { return this._attrs; }

    public get data(): any
    { if (kw.isValid(this.rslt)) { return this.rslt.val; } }

    public get fltr(): kwFltr
    { return this._fltr; }

    public get inits(): kwInits
    { if (kw.isValid(this._inits)) { return this._inits.inits; } }

    public get rslt(): kwRslt
    { return this._rslt; }
    
    public get sComp(): string
    { if (kw.isValid(this._tag)) { return this._tag.sTag; } }

    public get sId(): string
    {  if (kw.isValid(this._attrs)) { return this._attrs.sId; } }

    public get sLink(): string
    { if (kw.isValid(this._attrs)) {  return this._attrs.sLink; } }

    public get sStyl(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sText; } }

    public get view(): any
    { if (kw.isValid(this._view)) { return this._view.view; } }


    public set rslt(val: kwRslt) { this._rslt = val; }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return true;
        }

        this.bInit = true;

        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn, "]");


        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp, "]");


        if (!kw.isValid(this.fltrIn))
        {
            console.error(log.invalid("fltrIn"));
            return false;
        }
        //console.info(log.isObj("fltrIn"), this.fltrIn, "]");


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn, "]");


        if (!kw.isValid(this.rsltIn))
        {
            console.error(log.invalid("rsltIn"));
            return false;
        }
        //console.info(log.isObj("rsltIn"), this.rsltIn, "]");


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));


        if (!kw.isString(this.sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.is("sParent", this.sParent));


        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn, "]");


        if (!this.createView())
        {
            console.error(log.errCreate("view"));
            return false;
        }


        if (!this.createAttrs())
        {
            console.error(log.errCreate("attrs"));
            return false;
        }


        if (!this.createRslt())
        {
            console.error(log.errCreate("rslt"));
            return false;
        }


        if (!this.createInits())
        {
            console.error(log.errCreate("inits"));
            return false;
        }


        if (!this.createFltr())
        {
            console.error(log.errCreate("fltr"));
            return false;
        }


        if (!this.createTag())
        {
            console.error(log.errCreate("tag"));
            return false;
        }

        return true;
    }


    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        const attrs = this.attrs;
        if (!kw.isValid(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const rslt = this.rslt;
        if (!kw.isValid(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        if (!rslt.loadData(data))
        {
            console.error(log.errLoad("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");
        //console.info(log.isObj("data"), this.data, "]");


        if (!attrs.loadData(this.data))
        {
            console.error(log.errLoad("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        return true;
    }


    public loadFltr(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            //console.info(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data, "]");


        const fltr = this.fltr;
        if (!kw.isValid(fltr))
        {
            console.error(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");


        if (!fltr.loadData(data))
        {
            console.error(log.errLoad("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");


        return true;
    }


    private createAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createAttrs");
        //console.log(log.called());


        if (this.bCreateAttrs)
        {
            return true;
        }

        this.bCreateAttrs = true;


        const attrsIn: object = this.attrsIn;
        if (!kw.isValid(attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), attrsIn, "]");


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.is("sParent", sParent));


        const view: kwView = this._view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const attrs = new kwAttrs(attrsIn, sParent, view);
        if (!attrs.init())
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        this._attrs = attrs;

        return true;
    }


    private createFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createFltr");
        //console.log(log.called());

        if (this.bCreateFltr)
        {
            return true;
        }

        this.bCreateFltr = true;


        const fltrIn = this.fltrIn;
        if (kw.isNull(fltrIn))
        {
            console.error(log.invalid("fltrIn"));
            return false;
        }
        //console.info(log.isObj("fltrIn"), fltrIn, "]");


        const inits = this.inits;
        if (kw.isNull(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.is("sParent", sParent);


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const fltr = new kwFltr(fltrIn, sParent, view);
        if (!fltr.init())
        {
            console.error(log.errCreate("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");


        this._fltr = fltr;

        return true;
    }


    private createInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createInits");
        //console.log(log.called());

        if (this.bCreateInits)
        {
            return true;
        }

        this.bCreateInits = true;


        const attrs = this.attrs;
        if (kw.isNull(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const initsIn = this.initsIn;
        if (kw.isNull(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");


        const rslt = this.rslt;
        if (kw.isNull(rslt))
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        const inits = new kwInits(attrs, initsIn, rslt);
        if (!inits.init())
        {
            console.error(log.errCreate("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");


        this._inits = inits;

        return true;
    }


    private createRslt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createRslt");
        //console.log(log.called());


        if (this.bCreateRslt)
        {
            return true;
        }

        this.bCreateRslt = true;


        const rsltIn: kwtRslt = this.rsltIn;
        if (!kw.isValid(rsltIn))
        {
            console.error(log.invalid("rsltIn"));
            return false;
        }
        //console.info(log.isObj("rsltIn"), rsltIn, "]");


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.is("sParent", sParent);


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const rslt = new kwRslt(rsltIn, sParent, view);
        if (!rslt.init())
        {
            console.error(log.invalid("rslt"));
            return false;
        }
        //console.info(log.isObj("rslt"), rslt, "]");


        this.rslt = rslt;

        return true;
    }


    private createTag(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTag");
        //console.log(log.called());

        if (this.bCreateTag)
        {
            return true;
        }

        this.bCreateTag = true;

        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }


        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }

        const tag = new kwTag(disp, sTag);
        if (!tag.init())
        {
            console.error(log.errCreate("tag"));
            return false;
        }
        //console.info(log.is("tag", tag));

        this._tag = tag;

        return true;
    }


    private createView(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createView");
        //console.log(log.called());

        if (this.bCreateView)
        {
            return true;
        }

        this.bCreateView = true;


        const viewIn = this.viewIn;
        if (!kw.isValid(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), viewIn, "]");


        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sTag", sTag));


        const view = new kwView(sTag, viewIn);
        if (!view.init())
        {
            console.error(log.errCreate("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        this._view = view;

        return true;
    }


}
