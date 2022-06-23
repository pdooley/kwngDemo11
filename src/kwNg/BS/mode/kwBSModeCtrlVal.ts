/**********************************************************************
 *
 * kwNg/BS/mode/kwBSModeCtrlVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component }            from "@angular/core";

import {kwBS }                 from "@kwClass/BS/kwBS";
import {kwBSVal }              from "@kwNgBS/kwBSVal";
import {kwMode }               from "@kwClass/mode/kwMode";
import {kwNgCtrlDataVal }      from "@kwNgClass/kwNgCtrlDataVal";

import {kwBSModeVal }          from "./kwBSModeVal";

//@formatter:on


@Component({
    selector: 'kw-bootstrap-mode-ctrl-val',
    template: `<br>`,
})
export class kwBSModeCtrlVal extends kwNgCtrlDataVal
{
    constructor(
        private srvcBS: kwBSVal,
        private srvcStore: kwBSModeVal     )
    {
        super();
        //console.log("kwBSModeCtrlVal::constructor() called");
    }

    protected load(): boolean
    {
        //console.log("kwBSModeCtrlVal::ngOnInit() called");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwAccBsCtrlVal::ngOnInit() error retrieving BS.");
            return false;
        }
        //console.info("kwAccBsCtrlVal::ngOnInit() BS is [", BS, "]");

        const mode: kwMode = BS.mode;
        if (!kwMode.is(mode))
        {
            console.error("kwAccBsCtrlVal::ngOnInit() error retrieving mode.");
            return false;
        }
        //console.info("kwAccBsCtrlVal::ngOnInit() mode is [", mode, "]");

        this.srvcStore.change(mode);

        return true;
    }
}
