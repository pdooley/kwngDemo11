"use strict";
/**********************************************************************
 *
 * kw/class/kwOptions.ts
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
var kwAct_1 = require("../act/kwAct");
var kwData_1 = require("../data/kwData");
;
var kwToken_1 = require("../token/kwToken");
var kwUrl_1 = require("../url/kwUrl");
var kwOptionsSrvc_1 = require("./kwOptionsSrvc");
// @formatter:on
var kwOptions = (function () {
    function kwOptions(type) {
        this.type = type;
        console.log("kwOptions::constructor() is called.");
    }
    kwOptions.prototype.init = function () {
        //console.log("kwOptions::init() called.");
        if (!kwOptionsSrvc_1.kwOptionsSrvc.isType(this.type)) {
            console.error("kwOptions::init() type is not valid.");
            return false;
        }
        console.info("kwOptions::init() type is ", this.type);
        var params = this.type.params;
        if (!kw_1.kw.isNull(params)) {
            console.error("kwOptions::init() params is not valid.");
            return false;
        }
        console.info("kwOptions::init() params is ", params);
        this.params = params;
        var act = this.type.act;
        if (!kwAct_1.kwAct.is(act)) {
            console.error("kwOptions::init() act is not valid.");
            return false;
        }
        console.info("kwOptions::init() act is ", act);
        this.act = act;
        var data = this.type.data;
        if (!kwData_1.kwData.is(data)) {
            console.error("kwOptions::init() data is not valid.");
            return false;
        }
        console.info("kwOptions::init() data is ", data);
        this.data = data;
        var sMode = this.type.sMode;
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwOptions::init() sMode is not valid.");
            return false;
        }
        console.info("kwOptions::init() sMode is ", sMode);
        this.sMode = sMode;
        var token = this.type.token;
        if (!kwToken_1.kwToken.is(token)) {
            console.error("kwOptions::init() token is not valid.");
            return false;
        }
        console.info("kwOptions::init() token is ", token);
        this.token = token;
        return this.create();
    };
    ;
    kwOptions.prototype.getOptions = function () {
        //console.log("kwOptions::getOptions() called.");
        return this.type;
    };
    kwOptions.prototype.create = function () {
        //console.log("kwOptions::create() called.");
        var sToken;
        if (!kwToken_1.kwToken.is(this.token)) {
            console.error("kwOptions::create() token is not valid.");
            return;
        }
        console.info("kwOptions::create() token is ", this.token);
        sToken = this.token.toString();
        if (!kw_1.kw.isString(sToken)) {
            console.error("kwOptions::create() sToken is invalid");
            return;
        }
        console.info("kwOptions::create() sToken is ", sToken);
        var url = this.createUrl();
        if (!kwUrl_1.kwUrl.is(url)) {
            console.error("kwOptions::create() url is not valid.");
            return;
        }
        console.info("kwOptions::create() url is ", this.url);
        var sUrl = url.toString();
        if (!kw_1.kw.isString(sUrl)) {
            console.error("kwOptions::create() sUrl is not valid.");
            return;
        }
        console.info("kwOptions::create() sUrl is ", sUrl);
        var sMethod = this.retrieveMethod();
        if (!kw_1.kw.isString(sMethod)) {
            console.error("kwOptions::create() sMethod is not valid.");
            return;
        }
        console.info("kwOptions::create() sMethod is ", sMethod);
        console.info("kwOptions::create() data is ", this.data);
        var options = {
            headers: {
                authorization: sToken
            },
            url: sUrl,
            method: sMethod,
            data: this.data
        };
        console.info("kwOptions::create() options is ", options);
        this.options = options;
    };
    ;
    kwOptions.prototype.retrieveMethod = function () {
        //console.log("kwOptions::retrieveMethod() called.");
        if (!kwAct_1.kwAct.is(this.act)) {
            console.error("kwOptions::retrieveMethod() act is not valid.");
            return undefined;
        }
        var sMethod = this.act.toString();
        if (!kw_1.kw.isString(sMethod)) {
            console.error("kwOptions::retrieveMethod() sMethod is invalid.");
            return undefined;
        }
        console.info("kwOptions::retrieveMethod() sMethod is ", sMethod);
        return sMethod;
    };
    ;
    kwOptions.prototype.createUrl = function () {
        //console.log("kwOptions::createUrl() called.");
        if (!kw_1.kw.isNull(this.act)) {
            console.error("kwOptions::createUrl() action is not valid.");
            return undefined;
        }
        if (!kw_1.kw.isNull(this.params)) {
            console.error("kwOptions::createUrl() params is not valid.");
            return undefined;
        }
        var url = new kwUrl_1.kwUrl(this.act, this.params);
        if (!url.init()) {
            console.error("kwOptions::createUrl() error creating url.");
            return undefined;
        }
        return url;
    };
    ;
    kwOptions.prototype.toString = function () {
        return this.constructor.name;
    };
    ;
    kwOptions.is = function (obj) {
        return kw_1.kw.is(obj, kwOptions);
    };
    return kwOptions;
}());
exports.kwOptions = kwOptions;
