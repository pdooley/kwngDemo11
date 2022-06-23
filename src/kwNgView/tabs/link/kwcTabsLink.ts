/**********************************************************************
 *
 * kwNgComp/tabs/Link/kwcTabsLink.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtTabsLink} from "./kwtTabsLink";

const sTAG: string = "";


@Component({
    selector: 'kwc-tabs-Link',
    templateUrl: 'kwcTabsLink.html',
    styleUrls: ['kwcTabsLink.scss']
})
export class kwcTabsLink extends kwNgCtrlCompId
{
    public title: object;
    public img: object;

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::parseView() called.");

    }

    protected parseData(data: any): void {
        //console.log(this.sClass, "::parseData() called.");
    }

    protected parseInits(inits: object): void {
        //console.log(this.sClass, "::parseInits() called.");
    }

    protected parseView(view: object): void {
        //console.log(this.sClass, "::parseView() called.");

        if (kw.isNull(view)) {
            console.error(this.sClass, "::parseView() view is invalid");
            return;
        }

        const type: kwtTabsLink = <kwtTabsLink>view;

        const title: object = type.title;
        if (kw.isValid(title)) {
            //console.info(this.sClass, "::parseView() title is [", title, "]");
            this.title = title;
        }

        const img: object = type.img;
        if (kw.isValid(img)) {
            //console.info(this.sClass, "::parseView() img is [", img, "]");
            this.img = img;
        }

        if (!kw.isValid(img)
            && !kw.isValid(title)
            && !kw.isString(this.sLink))
        {
            const sMsg = "Recognizes only [img, sLink, title]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

        if (!kw.isValid(img)
            && !kw.isValid(title)) {
            const sMsg = "requires one of [img, title]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

        if (!kw.isString(this.sLink)) {
            const sMsg = "Absolutely requires [sLink]";
            console.error(this.sClass, "::parseView() ", sMsg);
        }

    }
}
