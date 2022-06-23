//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtForm} from "./kwtForm";


const sTAG: string = "";


@Component({
    selector: 'kwc-form',
    templateUrl: 'kwcForm.html',
    styleUrls: ['kwcForm.scss']
})
export class kwcForm extends kwNgCtrlCompId {
    public sIcon: string;
    public sTitle: string;

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

        const type: kwtForm = <kwtForm>view;


        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon)) {
            //console.info(this.sClass, "::parseView() sIcon is [", sIcon, "]");
            this.sIcon = sIcon
        }


        const sTitle: string = type.sTitle;
        if (kw.isString(sTitle)) {
            //console.info(this.sClass, "::parseView() sTitle is [", sTitle, "]");
            this.sTitle = sTitle
        }
    }

}
