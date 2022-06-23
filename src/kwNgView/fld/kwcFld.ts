/**********************************************************************
 *
 * kwNgComp/fld/kwcFld.ts
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

const sTAG: string = "fld";


@Component({
    selector: 'kwc-fld',
    templateUrl: 'kwcFld.html',
    styleUrls: ['kwcFld.scss']
})
export class kwcFld extends kwNgCtrlCompId {

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
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
    }

    protected parseView(view: object): void {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
        this.dispHelp()
    }

    private dispHelp() {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());

        const sText = this.sText;

        if (!kw.isString(sText))
        {
            console.error(log.info("Used for displaying a fld in a parents record"));
            console.error(log.recognizes("sTextId, sTextIdD"));
            console.error(log.requires("sDataId"));
        }
    }


}
