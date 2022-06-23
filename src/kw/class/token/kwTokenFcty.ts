/**********************************************************************
 *
 * kw/class/token/kwTokenFcty.ts
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
import {kw }                   from "@kw/kw";
import {kwAjax }               from "@kwClass/ajax/kwAjax";
import {kwToken }              from "./kwToken";
import {kwTokenEnum }          from "./kwTokenEnum";
import {kwTokenAuth0 }         from "./kwTokenAuth0";
import {kwTokenMap }           from "./kwTokenMap";
import {kwTokenNull }          from "./kwTokenNull";
import {kwTokenOrg }           from "./kwTokenOrg";
import {kwTokenSrvc }          from "./kwTokenSrvc";
//@formatter:on


export class kwTokenFcty
{
    static create(tokens: kwTokenMap, ajax: kwAjax): kwToken
    {
        //console.log("kwTokenSrvc::loadAuthorization() called.");

        if ( kw.isNull(tokens))
        {
            console.error("kwTokenSrvc::create() tokens is invalid");
            return;
        }
        //console.info("kwTokenSrvc::create() tokens is [", tokens, "]");

        if (!kwAjax.is(ajax))
        {
            console.error("kwTokenSrvc::create() ajax is invalid");
            return;
        }
        //console.info("kwTokenSrvc::create() ajax is [", ajax, "]");

        let sType: string = ajax.sToken;
        if (!kw.isString(sType))
        {
            sType = "null";
        }
        //console.info("kwTokenSrvc::create() sType is [", sType, "]");

        const nType = kwTokenSrvc.toEnum(sType);
        if (!kwTokenSrvc.in(nType))
        {
            console.error("kwTokenSrvc::create() [", sType, "] is invalid");
            return;
        }
        //console.info("kwTokenSrvc::create() nType is [", nType, "]");

        let token: kwToken;

        switch ( nType )
        {
            case kwTokenEnum.auth0:
            {
                token = new kwTokenAuth0(tokens);
                break;
            }

            case kwTokenEnum.org:
            {
                token = new kwTokenOrg(tokens);
                break;
            }

            case kwTokenEnum.null:
            {
                token = new kwTokenNull(tokens);
                break;
            }

            default:
            {
                console.error("kwTokenSrvc::create() nType is invalid");
            }
        }

        if ( kw.isNull(token))
        {
            console.error("kwOptions::createToken() token is not valid.");
            return;
        }

        if (!token.init())
        {
            console.error("kwOptions::createToken() error initializing token.");
            return;
        }

        return token;
    }

}

