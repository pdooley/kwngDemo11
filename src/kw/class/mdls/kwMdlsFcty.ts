/**********************************************************************
 *
 * kw/class/mdls/kwMdlsFcty.ts
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
import { kw }               from "@kw/kw";
import { kwMdls }           from "./kwMdls";
//@formatter:on


const sTAG: string = "sMdls";

export class kwMdlsFcty
{
    static create(info: object): kwMdls
    {
        //console.log("kwMdls::create() called");

        if (kw.isNull(info))
        {
            console.error("kwMdls::create() info is invalid");
            return;
        }
        //console.info("kwMdls::create() info is ", info);

        const val: object = info[sTAG];
        if (kw.isNull(val))
        {
            console.error("kwMdls()::create() val is invalid.");
            return;
        }
        //console.info("kwMdls()::create() val is ", val);

        const mdls: kwMdls = new kwMdls(val);
        if (!mdls.init())
        {
            console.error("kwMdls()::create() error initializing mdls.");
            return;
        }
        //console.info("kwMdls()::create() mdls is ", mdls);

        return mdls;
    }
}

