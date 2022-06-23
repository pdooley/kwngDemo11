//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtSvgRawDefs} from "./kwtSvgRawDefs";


const sTAG: string = "defs";


@Component({
    selector: 'kwc-svg-raw-defs',
    templateUrl: 'kwcSvgRawDefs.html',
    styleUrls: ['kwcSvgRawDefs.scss']
})
export class kwcSvgRawDefs extends kwNgCtrlCompId
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

        const type: kwtSvgRawDefs = <kwtSvgRawDefs>this.view;

        const fltr: object = type.fltr;
        if (kw.isValid(fltr)) {
            //console.info(this.sClass, "::parseView() fltr is [", fltr, "]");
        }

        if (!kw.isValid(fltr)) {
            const sMsg = "Recognizes only [fltr]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
