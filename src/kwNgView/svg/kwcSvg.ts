//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtSvg} from "./kwtSvg";


const sTAG: string = "svg";


@Component({
    selector: 'kwc-svg',
    templateUrl: 'kwcSvg.html',
    styleUrls: ['kwcSvg.scss']
})
export class kwcSvg extends kwNgCtrlCompId
{
    public sPath: string;

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

        const type: kwtSvg = <kwtSvg>view;


        const sPath: string = type.sPath;
        if (!kw.isString(sPath)) {
            //console.info(this.sClass, "::parseView() sPath is invalid");
            return;
        }
        //console.info(this.sClass, "::parseView() sPath is [", sPath, "]");
        this.sPath = sPath

    }

}
