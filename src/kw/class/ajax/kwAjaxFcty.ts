/**********************************************************************
 *
 * kw/class/ajax/kwAjaxFcty.ts
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
import {kw }                    from "@kw/kw";
import {kwActType }            from "@kwClass/act/kwActType";
import {kwAjax }               from "./kwAjax";
import {kwAjaxDebug }          from "./kwAjaxDebug";
import {kwAjaxEnum }           from "./kwAjaxEnum";
import {kwAjaxLive }           from "./kwAjaxLive";
import {kwAjaxSrvc }           from "./kwAjaxSrvc";
import {kwAjaxType }           from "./kwAjaxType";
//@formatter:on



export class kwAjaxFcty
{

    static create(info: kwActType, nType: kwAjaxEnum): kwAjax
    {
        //console.log("kwAjaxFcty::create() called.");

        if (kw.isNull(info))
        {
            console.error("kwAjaxFcty::create() nType is invalid.");
            return;
        }
        //console.info("kwAjaxFcty::create() info is ", info);

        if (!kwAjaxSrvc.in(nType))
        {
            console.error("kwAjaxFcty::create() nType is invalid.");
            return;
        }
        //console.info("kwAjaxFcty::create() nType is ", nType);

        const sType: string = kwAjaxSrvc.toString(nType);
        if (!kw.isString(sType))
        {
            console.error("kwAjaxFcty::create() sType is invalid.");
            return;
        }
        //console.info("kwAjaxFcty::create() sType is ", sType);


        const type: kwAjaxType = info[sType];
        if (kw.isNull(type))
        {
            console.error("kwAjaxFcty::create() error retrieving type.");
            return;
        }
        //console.info("kwAjaxFcty::create() info is ", info);

        let ajax: kwAjax;

        switch (nType)
        {
            case kwAjaxEnum.debug:
            {
                ajax = new kwAjaxDebug(type);
                break;
            }

            case kwAjaxEnum.live:
            {
                ajax = new kwAjaxLive(type);
                break;
            }

            default:
            {
                console.error("kwAjaxFcty::create() nType is invalid.");
                return;
            }
        }
        if (!kwAjax.is(ajax))
        {
            console.error("kwAjaxFcty::create() error retrieving ajax.");
            return;
        }
        //console.info("kwAjaxFcty::create() ajax is ", ajax);

        if (!ajax.init())
        {
            console.error("kwAjaxFcty::create() error initializing ajax.");
            return;
        }
        //console.info("kwAjaxFcty::create() ajax is ", ajax);

        return ajax;
    }

}

