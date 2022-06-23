/**********************************************************************
 *
 * kw/ctrl/kwBSCtrlMdl.ts
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
import { kwMdl }            from "@kwClass/mdl/kwMdl";
import { kwMdls }           from "@kwClass/mdls/kwMdls";
import { kwMdlSub }         from "@kwClass/mdl/kwMdlSub";
import { kwStDataList }     from "@kwState/kwStDataList";
import { kwStMdl }          from "@kwState/kwStMdl";
import { kwtMdl }           from "@kwClass/mdl/kwtMdl";
//@formatter:off


export class kwBSCtrlMdl
{
    mdls: kwMdls;

    constructor(
        private srvcMdl: kwStMdl,
        protected srvcMdls: kwStDataList,
        private sState: string  )
    {
        //console.log("kwBSCtrlMdl::constructor() called");
    }

    protected init(): boolean
    {
        //console.log("kwBSCtrlMdl::init() called");

        return true;
    }

    protected load()
    {
        //console.log("kwBSCtrlMdl::load() called");
        if (!kw.isString(this.sState))
        {
            console.error("kwBSCtrlMdl::load() sState is invalid");
            return false;
        }
        //console.info("kwBSCtrlMdl::load() sState is ", this.sState);

        if (kw.isNull(this.srvcMdls))
        {
            console.error("kwBSCtrlMdl::load() srvcMdls is invalid");
            return false;
        }

        const data: object = this.srvcMdls.getFirst();
        if (kw.isNull(data))
        {
            console.error("kwBSCtrlMdl::load() data is invalid.");
            return false;
        }
        //console.info("kwBSCtrlMdl::load() data is ", data);

        const val: kwtMdl     = data[this.sState];
        if (kw.isNull(val))
        {
            console.error("kwBSCtrlMdl::load() mdl for [", this.sState, "] is not provided.");
            return false;
        }
        //console.info("kwBSCtrlMdl::load() val is ", val);

        const mdl: kwMdl = new kwMdlSub(val);
        if (!mdl.init())
        {
            console.error("kwBSCtrlMdl::load() error creating mdl.");
            return false;
        }
        //console.info("kwBSCtrlMdl::load() mdl is ", mdl);
        this.srvcMdl.change(mdl);

        return true;
    }
}
