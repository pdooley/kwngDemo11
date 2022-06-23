/**********************************************************************
 *
 * kwNg/state/login/kwLoginVal.ts
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
import { Injectable }       from '@angular/core';

import { kw }               from "@kw/kw";
import { kwCred }           from "@kwClass/cred/kwCred";
import { kwtCred }          from "@kwClass/cred/kwtCred";
import { kwNgStDataVal }    from "@kwNgClass/kwNgStDataVal";
import { kwStateX }         from "@kwClass/kwStateX";
import { kwBSTraceVal }     from "@kwNgBS/trace/kwBSTraceVal";

//@formatter:on

@Injectable()
export class kwLoginVal extends kwNgStDataVal
{
    static xExport(record: kwtCred)
    {
        //console.log("kwLoginVal::xExport() called.");

        const recordNew: kwtCred = new kwtCred();

        if (kw.isNull(record))
        {
            console.error("kwLoginVal::xExport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwLoginVal::xExport() error creating x.");
            return;
        }

        recordNew.sUserName = x.getString("sUsername");
        recordNew.sPassword = x.getString("sPassword");

        return recordNew;
    }

    static xImport(record: kwtCred)
    {
        //console.log("srvcStateLogin::ximport() called.");

        const recordNew: kwtCred = new kwtCred();

        if (kw.isNull(record))
        {
            console.error("srvcStateLogin::ximport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwLoginVal::xExport() error creating x.");
            return;
        }

        recordNew.sUserName = x.getString("username");
        recordNew.sPassword = x.getString("password");

        return recordNew;
    }

    constructor(srvcTrace: kwBSTraceVal)
    {
        super(srvcTrace);

        //console.log(this.sTag,"::constructor() called.");
    }

    public get(): kwCred
    {
        return <kwCred>super.get();
    }


}
