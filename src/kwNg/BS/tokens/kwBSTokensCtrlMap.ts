/**********************************************************************
 *
 * kwNg/BS/tokens/kwBSTokensCtrlMap.ts
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
import {Component }        from '@angular/core';
import {OnInit }           from '@angular/core';
import {OnDestroy }        from '@angular/core';
import {Subscription }     from 'rxjs/Subscription';

import {kw }               from "@kw/kw";
import {kwBS }             from "@kwClass/BS/kwBS";
import {kwBSVal }          from "@kwNgBS/kwBSVal";
import {kwSigninList}      from "@kwNgState/signin/kwSigninList";
import {kwTokens }         from "@kwClass/tokens/kwTokens";
import {kwTokenType }      from "@kwClass/token/kwTokenType";

import {kwBSTokensMap }    from "./kwBSTokensMap";

//@formatter:off


const sTOKEN: string = "token";
const sORG: string = "org";

@Component({
    selector: 'kw-bootstrap-tokens-ctrl-map',
    template: `<br>`,
})
export class kwBSTokensCtrlMap implements OnInit, OnDestroy
{
    subBS: Subscription;
    subSignin: Subscription;

    constructor(
        private    srvcTokens: kwBSTokensMap,
        private srvcSignin: kwSigninList,
        private srvcBS: kwBSVal )
    {
        //console.log("kwBSTokensCtrlMap::constructor() called");
    }

    ngOnInit()
    {
        //console.log("kwBSTokensCtrlMap::ngOnInit() called");
        this.subBS = this.srvcBS.changed$.subscribe(info =>
        {
            this.load();
        });

        this.load();

        this.subSignin = this.srvcSignin.changed$.subscribe(info =>
        {
            this.loadOrg();
        });

        this.loadOrg();
    }

    ngOnDestroy()
    {
        //console.log("kwBSTokensCtrlMap::ngOnDestroy() called.");
        this.subBS.unsubscribe();
        this.subSignin.unsubscribe();
    }

    load(): void
    {
        //console.log("kwBSTokensCtrlMap::load() called.");

        const BS: kwBS = this.srvcBS.get();
        if (!kwBS.is(BS))
        {
            console.error("kwBSTokensCtrlMap::load() BS is invalid.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::load() BS is ", BS);

        const tokens: kwTokens = BS.tokens;
        if (!kwTokens.is(tokens))
        {
            console.error("kwBSTokensCtrlMap::load() tokens is invalid.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::load() tokens is ", tokens);

        const list: kwTokenType[] = tokens.getList();
        if (!kw.isArray(list))
        {
            console.error("kwBSTokensCtrlMap::load() list is invalid.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::load() list is ", list);

        this.srvcTokens.change(list);
    }

    loadOrg(): void
    {
        //console.log("kwBSTokensCtrlMap::loadOrg() called.");

        const tokens: kwTokenType[] = this.srvcTokens.get();
        if (!kw.isArray(tokens))
        {
            //console.info("kwBSTokensCtrlMap::loadOrg() tokens not yet loaded.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::loadOrg() tokens are ", tokens);

        const data: Object = this.srvcSignin.getFirst();
        if (kw.isNull(data))
        {
            //console.info("kwBSTokensCtrlMap::loadOrg() data not yet loaded.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::loadOrg() data is ", data);

        const sToken: string = data[sTOKEN];
        if (!kw.isString(sToken))
        {
            console.error("kwBSTokensCtrlMap::loadOrg() sToken is invalid.");
            return;
        }
        //console.info("kwBSTokensCtrlMap::loadOrg() sToken is ", sToken);

        for (let i in tokens)
        {
            //console.info("kwBSTokensCtrlMap::loadOrg() token is ", tokens[i]);
            if (tokens[i].sCode === sORG)
            {
                tokens[i].sVal = sToken;
            }
        }

        this.srvcTokens.change(tokens);
    }

}
