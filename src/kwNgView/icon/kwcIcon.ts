/**********************************************************************
 *
 * kwNgComp/icon/kwcIcon.ts
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
import {Component} from "@angular/core";

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtIcon} from "./kwtIcon";

//@formatter:on

const sTAG: string = "icon";

@Component({
    selector: "kwc-icon",
    templateUrl: "kwcIcon.html",
    styleUrls: ["kwcIcon.scss"]
})
export class kwcIcon extends kwNgCtrlCompId {

    public sIcon: string;

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

        const type: kwtIcon = <kwtIcon>view;

        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::parseView() sIcon is [", sIcon, "]");
            this.sIcon = sIcon;
        }

        if (!kw.isString(sIcon)) {
            console.error(this.sClass, "::parseView() Only recognize [sIcon]");
        }
    }
}
