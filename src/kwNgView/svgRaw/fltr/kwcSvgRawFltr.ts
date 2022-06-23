//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtSvgRawFltr} from "./kwtSvgRawFltr";


const sTAG: string = "fltr";

const sDEFAULT_FILL_RULE: string = "evenodd";

@Component({
    selector: 'kwc-svg-raw-fltr',
    templateUrl: 'kwcSvgRawFltr.html',
    styleUrls: ['kwcSvgRawFltr.scss']
})
export class kwcSvgRawFltr extends kwNgCtrlCompId
{

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

        const type: kwtSvgRawFltr = <kwtSvgRawFltr>this.view;

        const blnd: object = type.blnd;
        if (kw.isValid(blnd)) {
            //console.info(this.sClass, "::parseView() blnd is [", blnd, "]");
        }

        const cmp: object = type.cmp;
        if (kw.isValid(cmp)) {
            //console.info(this.sClass, "::parseView() cmp is [", cmp, "]");
        }

        const fld: object = type.fld;
        if (kw.isValid(fld)) {
            //console.info(this.sClass, "::parseView() fld is [", fld, "]");
        }

        if (!kw.isValid(blnd)
            && !kw.isValid(cmp)
            && !kw.isValid(fld)) {
            const sMsg = "Recognizes only [blnd, cmp, fld]";
            console.error(this.sClass, "::parseView()", sMsg);
        }


    }

}
