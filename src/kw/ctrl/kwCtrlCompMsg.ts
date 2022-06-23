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
import { kw }                       from "@kw/kw"
import { kwCtrlComp }               from "./kwCtrlComp";
import { kwStData }                 from "@kwState/kwStData"


export abstract class kwCtrlCompMsg extends kwCtrlComp
{

    constructor(
        sTag: string,
        protected srvcData: kwStData )
    {
        super(sTag);
        //console.log(this.sClass, "::constructor() called");
    }

    protected abstract request(): void;
    protected abstract subscribe(): void;

//@formatter:on

    protected loadData(): boolean
    {
        //console.log(this.sClass, "::loadData() called.");

        if (kw.isValid(this.data))
        {
            console.error(this.sClass, "::loadData() data was already created ");
            return false;
        }

        //perhaps it is not yet ready
        this.subscribe();
        this.request();

        return true;
    }


}
