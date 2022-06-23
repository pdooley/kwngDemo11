/**********************************************************************
 *
 * kwNgComp/subTitle/kwcSubTitle.ts
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

const sTAG: string = "subTitle";


@Component({
    selector: 'kwc-sub-title',
    templateUrl: 'kwcSubTitle.html',
    styleUrls: ['kwcSubTitle.scss']
})
export class kwcSubTitle extends kwNgCtrlCompId
{

    public sSubTitle: string;
    public sSubSubTitle: string;


    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


//@formatter:on

    protected initCmp(): void {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseData(data: any): void {
        const log = new kwLog(this.sClass, "parseData");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "parseInits");
        //console.info(log.called());
    }

    protected parseView(view: object): void {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        this.dispHelp()
    }

    private dispHelp() {
        const log = new kwLog(this.sClass, "dispHelp");
        //console.info(log.called());

        const sText = this.sText;

        if (!kw.isString(sText))
        {
            console.error(log.recognizes("sText, sTextId, sTextIdD"));
            console.error(log.requires("sText, sTextId, sTextIdD"));
        }
    }


}
