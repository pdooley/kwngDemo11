/**********************************************************************
 *
 * kw/state/kwStForm.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import { kw }               from "@kw/kw";
import { kwFormEnum }       from "@kwClass/form/kwFormEnum";
import { kwFormSrvc }       from "@kwClass/form/kwFormSrvc";
import { kwMsg }            from "@kwClass/msg/kwMsg";
import { kwStMsgFcty }      from "@kwState/kwStMsgFcty";
import { kwSt }             from "@kwState/kwSt";
import { kwStMdl }          from "@kwState/kwStMdl";
import { kwStMsg }          from "@kwState/kwStMsg";
import { kwTrace }          from "@kwClass/trace/kwTrace";
//@formatter:off



export abstract class kwStForm extends kwSt
{
    protected constructor(
        srvcTrace: kwTrace,
        protected srvcFcty: kwStMsgFcty,
        protected srvcMdl: kwStMdl,
        protected srvcMsg: kwStMsg  )
    {
        super(srvcTrace);
        //console.log(this.sClass, "::constructor() called.");
    }

    protected abstract loadRec(record: object): object;

    public init(): boolean
    {
        //console.log(this.sClass, "::init() called");

        if (!kwStMsgFcty.is(this.srvcFcty))
        {
            console.error(this.sClass, "::createRec() srvcFcty is invalid.");
            return false;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(this.sClass, "::createRec() srvcMdl is invalid.");
            return false;
        }

        if (!kwStMsg.is(this.srvcMsg))
        {
            console.error(this.sClass, "::createRec() srvcMsg is invalid.");
            return false;
        }

        return true;
    }

    public createRec(nForm: kwFormEnum, obj: object): object
    {
        //console.log(this.sClass, "::createRec() called");

        if (!kwFormSrvc.in(nForm))
        {
            console.error(this.sClass, "::createRec() nForm is invalid.");
            return;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(this.sClass, "::createRec() srvcMdl is invalid.");
            return;
        }

        if (!kwStMsgFcty.is(this.srvcFcty))
        {
            console.error(this.sClass, "::createRec() srvcFcty is invalid.");
            return;
        }

        let rec: object;

        switch (nForm)
        {
            case kwFormEnum.add:
            {
                const recAdd: object = this.srvcMdl.createRec();
                if (kw.isNull(recAdd))
                {
                    console.error(this.sClass, "::createRec() error creating record.");
                    return;
                }

                rec = this.loadRec(recAdd);
                break;
            }

            case kwFormEnum.edit:
            {
                rec = this.loadRec(obj);
                break;
            }

            case kwFormEnum.view:
            {
                rec = this.srvcMdl.copyRec(obj);
                break;
            }

        }

        if (kw.isNull(rec))
        {
            console.error(this.sClass, "::createRec() error creating record.");
            return;
        }

        return rec;
    }

    public saveRec(nForm: kwFormEnum, obj: object): boolean
    {
        //console.log(this.sClass, "::saveRec() called");

        if (!kwFormSrvc.in(nForm))
        {
            console.error(this.sClass, "::saveRec() nForm is invalid.");
            return false;
        }

        if (kw.isNull(obj))
        {
            console.error(this.sClass, "::saveRec() obj is invalid.");
            return;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(this.sClass, "::saveRec() srvcMdl is invalid.");
            return false;
        }

        if (!kwStMsg.is(this.srvcMsg))
        {
            console.error(this.sClass, "::saveRec() srvcMsg is invalid.");
            return false;
        }

        if (!kwStMsgFcty.is(this.srvcFcty))
        {
            console.error(this.sClass, "::saveRec() srvcFcty is invalid.");
            return;
        }

        const objX = this.srvcMdl.xExportRec(obj);
        if (kw.isNull(objX))
        {
            console.error(this.sClass, "::saveRec() objX is invalid");
            return false;
        }

        let msg: kwMsg;

        switch (nForm)
        {
            case kwFormEnum.add:
            {
                msg = this.srvcFcty.add(objX, []);
                break;
            }

            case kwFormEnum.edit:
            {
                const nId = objX["id"];
                if (!kw.isNumber(nId))
                {
                    console.error(this.sClass, "::saveRec() nId is invalid");
                    return false;
                }

                msg = this.srvcFcty.edit(objX, []);

                break;
            }

            default:
            {
                console.error(this.sClass, "::saveRec() nForm is invalid");
                return false;
            }

        }

        if (!kwMsg.is(msg))
        {
            console.error(this.sClass, "::saveRec() error creating msg");
            return;
        }

        this.srvcMsg.change(msg);

        return true;
    }

}




