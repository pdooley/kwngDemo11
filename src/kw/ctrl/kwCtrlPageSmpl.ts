/**********************************************************************
 *
 * kw/ctrl/kwCtrlPage.ts
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

import { kwLog }             from "@kw/kwLog";
import { kwCtrlPage }        from "./kwCtrlPage";
import { kwStDataVal }       from "@kwState/kwStDataVal";


export abstract class kwCtrlPageSmpl extends kwCtrlPage
{

    constructor(
        srvcInit: kwStDataVal,
        srvcView: kwStDataVal  )
    {
        super(srvcInit, srvcView );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected initPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initPage");
        //console.log(log.called());

        return true;
    }

    protected loadPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadPage");
        //console.log(log.called());

        return true;

    }

    protected parseData(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());

    }

}
