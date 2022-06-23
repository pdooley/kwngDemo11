/**********************************************************************
 *
 * kwNg/BS/kwBSCtrlVal.ts
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
import {Component }                from "@angular/core";

import {kwBS }                     from "@kwClass/BS/kwBS";
import {kwNgInit }                 from "@kwNg/kwNgInit";

import {kwBSVal }                  from "./kwBSVal";
//@formatter:on


@Component({
    selector: 'kw-bootstrap-ctrl-val',
    template: `<br>`,
})
export class kwBSCtrlVal
{
    constructor(
        private srvcBS: kwBSVal,
        private srvcInit: kwNgInit    )
    {
        //console.log("kwBSCtrlVal::constructor() called");
    }

    ngOnInit(): boolean
    {
        //console.log("kwBSCtrlVal::ngOnInit() called");

        const BS: kwBS = this.srvcInit.getBS();
        if (!kwBS.is(BS))
        {
            console.error("kwBSCtrlVal::ngOnInit() error retrieving BS.");
            return false;
        }
        //console.info("kwBSCtrlVal::ngOnInit() BS is [", BS, "]");

        this.srvcBS.change(BS);

        return true;
    }

}
