//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtSvgRawFltrFld} from "./kwtSvgRawFltrFld";


const sTAG: string = "fld";


@Component({
    selector: 'kwc-svg-raw-fltr-fld',
    templateUrl: 'kwcSvgRawFltrFld.html',
    styleUrls: ['kwcSvgRawFltrFld.scss']
})
export class kwcSvgRawFltrFld extends kwNgCtrlCompId
{
    sColor: string;
    sOpacity: string;
    sResult: string;

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

        const type: kwtSvgRawFltrFld = <kwtSvgRawFltrFld>view;

        const sColor: string = type.sColor;
        if (kw.isString(sColor)) {
            //console.info(this.sClass, "::parseView() sColor is [", sColor, "]");
            this.sColor = sColor
        }

        const sOpacity: string = type.sOpacity;
        if (kw.isString(sOpacity)) {
            //console.info(this.sClass, "::parseView() sOpacity is [", sOpacity, "]");
            this.sOpacity = sOpacity
        }

        const sResult: string = type.sResult;
        if (kw.isString(sResult)) {
            //console.info(this.sClass, "::parseView() sResult is [", sResult, "]");
            this.sResult = sResult
        }

        if (!kw.isString(sColor)
            && !kw.isString(sOpacity)
            && !kw.isString(sResult)) {
            const sMsg = "Recognizes only [sColor, sOpacity, sResult]";
            console.error(this.sClass, "::parseView()", sMsg);
        }

    }

}
