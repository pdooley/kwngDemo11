
/**********************************************************************
 *
 * kw/class/attr/kwAttrs.ts
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
import { kwAttr }            from "@kwClass/attr/kwAttr";
import { kwAttrId }          from "@kwClass/attr/kwAttrId";
import { kwAttrLink }        from "@kwClass/attr/kwAttrLink";
import { kwAttrStyl }        from "@kwClass/attr/kwAttrStyl";
import { kwAttrText }        from "@kwClass/attr/kwAttrText";
import { kwLog }             from "@kw/kwLog";
import { kwtAttrs }          from "@kwClass/attrs/kwtAttrs";
import { kwView }            from "@kwClass/view/kwView";



export class kwAttrs
{
    protected sClass: string = this.constructor.name;


    private _id:            kwAttr;
    private _link:          kwAttr;
    private _styl:          kwAttr;
    private _text:          kwAttr;

    private _attrs:         kwAttr[]    = [];

    private bInit:          boolean     = false;
    private bCreateId:      boolean     = false;
    private bCreateLink:    boolean     = false;
    private bCreateStyl:    boolean     = false;
    private bCreateText:    boolean     = false;
    private bLoadInits:     boolean     = false;


    private type:           kwtAttrs;


    constructor(
        private attrsIn:    object,
        private sParent:    string,
        private view:       kwView  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get attrs(): kwAttr[]
    {  if (kw.isValid(this._attrs))  { return this._attrs; } }

    public get sId(): string
    {  if (kw.isValid(this._id))  { return this._id.val; } }

    public get sLink(): string
    { if (kw.isValid(this._link)) {  return this._link.val; } }

    public get sStyl(): string
    { if (kw.isValid(this._styl)) { return this._styl.val; } }

    public get sText(): string
    { if (kw.isValid(this._text)) { return this._text.val; } }



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

        const attrsIn = this.attrsIn;
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
        //console.info(log.isObj("sParent"), sParent, "]");


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), this.view, "]");

        this.type = <kwtAttrs>attrsIn;


        if (!this.createId())
        {
            console.error(log.errCreate("id"));
            return false;
        }


        if (!this.createLink())
        {
            console.error(log.errCreate("link"));
            return false;
        }


        if (!this.createStyl())
        {
            console.error(log.errCreate("styl"));
            return false;
        }


        if (!this.createText())
        {
            console.error(log.errCreate("text"));
            return false;
        }

        return true;
    }


    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        const attrs = this.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        for (const attr of attrs)
        {

            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadData(data))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");

        }

        return true;
    }


    public loadInits(inits: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return;
        }

        this.bLoadInits = true;

        if (!this.bCreateId)
        {
            console.error(log.info("attrs not created"));
            return false;
        }

        if (!kw.isValid(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");

        const attrs = this.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        for (const attr of attrs)
        {
            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadInits(inits))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");

        }

        return true;
    }

    private createId(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createId");
        //console.log(log.called());


        if (this.bCreateId)
        {
            return;
        }

        this.bCreateId = true;


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), sParent, "]");


        const type = this.type;
        if (!kw.isValid(type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), type, "]");


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const idIn = type.id;
        if (!kw.isValid(idIn))
        {
            console.error(log.invalid("idIn"));
            return false;
        }
        //console.info(log.isObj("idIn"), idIn, "]");

        const id = new kwAttrId(idIn, sParent, view);
        if (!id.init())
        {
            console.error(log.errCreate("id"));
            return false;
        }
        //console.info(log.isObj("id"), id, "]");
        this._id = id;

        this._attrs.push(id);

        return true;
    }

    private createLink(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createLink");
        //console.log(log.called());


        if (this.bCreateLink)
        {
            return;
        }

        this.bCreateLink = true;


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), sParent, "]");


        const type = this.type;
        if (!kw.isValid(type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), type, "]");


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const linkIn = type.link;
        if (!kw.isValid(linkIn))
        {
            console.error(log.invalid("linkIn"));
            return false;
        }
        //console.info(log.isObj("linkIn"), linkIn, "]");

        const link = new kwAttrLink(linkIn, sParent, view);
        if (!link.init())
        {
            console.error(log.errCreate("link"));
            return false;
        }
        //console.info(log.isObj("link"), link, "]");
        this._link = link;

        this._attrs.push(link);

        return true;
    }

    private createStyl(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createStyl");
        //console.log(log.called());


        if (this.bCreateStyl)
        {
            return;
        }

        this.bCreateStyl = true;


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), sParent, "]");


        const type = this.type;
        if (!kw.isValid(type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), type, "]");


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const stylIn = type.styl;
        if (!kw.isValid(stylIn))
        {
            console.error(log.invalid("stylIn"));
            return false;
        }
        //console.info(log.isObj("stylIn"), stylIn, "]");

        const styl = new kwAttrStyl(stylIn, sParent, view);
        if (!styl.init())
        {
            console.error(log.errCreate("styl"));
            return false;
        }
        //console.info(log.isObj("styl"), styl, "]");
        this._styl = styl;

        this._attrs.push(styl);

        return true;
    }

    private createText(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createText");
        //console.log(log.called());


        if (this.bCreateText)
        {
            return;
        }

        this.bCreateText = true;


        const sParent = this.sParent;
        if (!kw.isString(sParent))
        {
            console.error(log.invalid("sParent"));
            return false;
        }
        //console.info(log.isObj("sParent"), sParent, "]");


        const type = this.type;
        if (!kw.isValid(type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), type, "]");


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const textIn = type.text;
        if (!kw.isValid(textIn))
        {
            console.error(log.invalid("textIn"));
            return false;
        }
        //console.info(log.isObj("textIn"), textIn, "]");

        const text = new kwAttrText(textIn, sParent, view);
        if (!text.init())
        {
            console.error(log.errCreate("text"));
            return false;
        }
        //console.info(log.isObj("text"), text, "]");
        this._text = text;

        this._attrs.push(text);

        return true;
    }


}
