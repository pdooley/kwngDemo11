/**********************************************************************
 *
 * kwNgComp/page/kwcpage.ts
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
import {kwtPage} from "./kwtPage";


const sTAG: string = "page";

@Component({
    selector: "kwc-page",
    templateUrl: "kwcPage.html",
    styleUrls: ["kwcPage.scss"]
})
export class kwcPage extends kwNgCtrlCompId {

    bdy: object;
    ftr: object;
    hdr: object;
    util: object;

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

        const type: kwtPage = <kwtPage>view;

        const bdy = type.bdy;
        if (kw.isValid(bdy)) {
            //console.info(this.sClass, "::parseView() bdy is [", bdy, "]");
            this.bdy = bdy;
        }

        const hdr = type.hdr;
        if (kw.isValid(hdr)) {
            //console.info(this.sClass, "::parseView() hdr is [", hdr, "]");
            this.hdr = hdr;
        }

        const util = type.util;
        if (kw.isValid(util)) {
            //console.info(this.sClass, "::parseView() util is [", util, "]");
            this.util = util;
        }

        const ftr = type.ftr;
        if (kw.isValid(ftr)) {
            //console.info(this.sClass, "::parseView() ftr is [", ftr, "]");
            this.ftr = ftr;
        }

        if (kw.isNull(bdy) && kw.isNull(hdr) && kw.isNull(util) && kw.isNull(ftr)) {
            console.error(this.sClass, "::parseView()Only recognize [hdr, util, bdy, ftr]");
        }

        return;
    }
}
