/**********************************************************************
 *
 * kw/ctrl/kwCtrlCompMsg.ts
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

import { kwCtrlComp }               from "./kwCtrlComp";


export abstract class kwCtrlCompId extends kwCtrlComp
{

    constructor(sTag: string)
    {
        super(sTag);
        //console.log(this.sClass, "::constructor() called");
    }


//@formatter:on

    protected loadData(): boolean
    {
        //console.log(this.sClass, "::loadData() called.");

        return true;
    }

}
