//@formatter:off
import {Component} from '@angular/core';

import {kw} from "@kw/kw";
import {kwLog} from "@kw/kwLog";
import {kwNgCtrlCompId} from "@kwNgClass/kwNgCtrlCompId";
import {kwtNav} from "./kwtNav";


const sTAG = "nav";


@Component({
    selector: 'kwc-nav',
    templateUrl: 'kwcNav.html',
    styleUrls: ['kwcNav.scss']
})
export class kwcNav extends kwNgCtrlCompId {
    public links: object[];

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

        const type: kwtNav = <kwtNav>view;

        const links: object[] = type.links;
        if (kw.isArray(links)) {
            //console.info(this.sClass, "::parseView() links is [", links, "]");
            this.links = links;
        }

        if (kw.isNull(links)) {
            console.error(this.sClass, "::parseView() Only recognizes [links]");
        }

    }

}
