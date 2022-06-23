/**********************************************************************
 *
 * kw/ctrl/kwCtrlComp.ts
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
import { kwStData }                 from "@kwState/kwStData"


export abstract class kwCtrlCompSt extends kwCtrlComp
{

    constructor(
        sTag: string,
        protected srvcData: kwStData )
    {
        super(sTag);
        //console.log(this.sClass, "::constructor() called");
    }

    protected abstract subscribe(): void;

//@formatter:on

    protected loadData(): boolean
    {
        //console.log(this.sClass, "::loadData() called.");

        this.subscribe();

        return true;
    }


}
