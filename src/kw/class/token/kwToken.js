"use strict";
/**********************************************************************
 *
 * kw/class/token/kwToken.ts
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
var kwTokenEnum_1 = require("./kwTokenEnum");
var kwTokenSrvc_1 = require("./kwTokenSrvc");
// @formatter:on
var kwToken = (function () {
    function kwToken(nType, sToken) {
        this.nType = nType;
        this.sToken = sToken;
        console.log("kwToken::constructor() is called.");
    }
    kwToken.prototype.init = function () {
        //console.log("kwToken::init() called.");
        if (!kwTokenSrvc_1.kwTokenSrvc.in(this.nType)) {
            console.error("kwToken::createToken() nType is invalid.");
            return false;
        }
        console.info("kwToken::createToken() nType is ", this.nType);
        if (!kw_1.kw.isString(this.sToken)) {
            console.error("kwToken::createToken() sToken is invalid.");
            return false;
        }
        console.info("kwToken::createToken() sToken is ", this.sToken);
        return this.createToken();
    };
    ;
    kwToken.prototype.createToken = function () {
        //console.log("kwToken::createToken() called.");
        if (!kwTokenSrvc_1.kwTokenSrvc.in(this.nType)) {
            console.error("kwToken::createToken() nType is invalid.");
            return false;
        }
        console.info("kwToken::createToken() nType is ", this.nType);
        if (!kw_1.kw.isString(this.sToken)) {
            console.error("kwToken::createToken() sToken is invalid.");
            return false;
        }
        console.info("kwToken::createToken() sToken is ", this.sToken);
        var sType = this.toString();
        if (!kw_1.kw.isString(sType)) {
            console.error("kwToken::createToken() sType is invalid.");
            return false;
        }
        console.info("kwToken::createToken() sType is ", sType);
        var sTokenFull = sType + " " + this.sToken;
        console.info("kwToken::createToken() sTokenFull is ", sTokenFull);
        this.sTokenFull = sTokenFull;
    };
    kwToken.prototype.getToken = function () {
        return this.sTokenFull;
    };
    kwToken.prototype.isAuth0 = function () {
        return (this.nType === kwTokenEnum_1.kwTokenEnum.Auth0);
    };
    kwToken.prototype.isOrg = function () {
        return (this.nType === kwTokenEnum_1.kwTokenEnum.Org);
    };
    kwToken.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwTokenEnum_1.kwTokenEnum);
    };
    ;
    kwToken.is = function (obj) {
        return kw_1.kw.is(obj, kwToken);
    };
    return kwToken;
}());
exports.kwToken = kwToken;
