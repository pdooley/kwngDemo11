"use strict";
/**********************************************************************
 *
 * kw/class/token/kwTokenSrvc.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// @formatter:off
var kw_1 = require("../../kw");
var kwTokenAuth0_1 = require("./kwTokenAuth0");
var kwTokenEnum_1 = require("./kwTokenEnum");
var kwTokenOrg_1 = require("./kwTokenOrg");
// @formatter:on
var kwTokenSrvc = (function () {
    function kwTokenSrvc() {
    }
    kwTokenSrvc.create = function (sType, sToken) {
        //console.log("kwTokenSrvc::loadAuthorization() called.");
        if (!kw_1.kw.isString(sType)) {
            console.error("kwTokenSrvc::create() sType is invalid");
            return;
        }
        console.info("kwTokenSrvc::create() sType is [", sType, "]");
        if (!kw_1.kw.isString(sToken)) {
            console.error("kwTokenSrvc::create() sToken is invalid");
            return;
        }
        console.info("kwTokenSrvc::create() sToken is [", sToken, "]");
        var nType = kwTokenSrvc.toEnum(sType);
        if (!kwTokenSrvc.in(nType)) {
            console.error("kwTokenSrvc::create() nType is invalid");
            return;
        }
        console.info("kwTokenSrvc::create() nType is [", nType, "]");
        var token;
        switch (nType) {
            case kwTokenEnum_1.kwTokenEnum.Auth0:
                {
                    token = new kwTokenAuth0_1.kwTokenAuth0(sToken);
                    break;
                }
            case kwTokenEnum_1.kwTokenEnum.Org:
                {
                    token = new kwTokenOrg_1.kwTokenOrg(sToken);
                    break;
                }
            default:
                {
                    console.error("kwTokenSrvc::create() nType is invalid");
                }
        }
        if (kw_1.kw.isNull(token)) {
            console.error("kwOptions::createToken() token is not valid.");
            return;
        }
        if (!token.init()) {
            console.error("kwOptions::createToken() error initializing token.");
            return;
        }
        return token;
    };
    ;
    kwTokenSrvc.isType = function (obj) {
        return false;
    };
    kwTokenSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwTokenEnum_1.kwTokenEnum);
    };
    kwTokenSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwTokenEnum_1.kwTokenEnum);
    };
    ;
    return kwTokenSrvc;
}());
exports.kwTokenSrvc = kwTokenSrvc;
