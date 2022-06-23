"use strict";
/**********************************************************************
 *
 * kw/class/api/kwApi.ts
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
var kwActs_1 = require("../acts/kwActs");
var kwActsSrvc_1 = require("../acts/kwActsSrvc");
var kwApiSrvc_1 = require("./kwApiSrvc");
// @formatter:on
var kwApi = (function () {
    function kwApi(type) {
        this.type = type;
        console.log("kwApi::constructor() called");
    }
    ;
    kwApi.prototype.init = function () {
        console.log("kwApi::init() is called.");
        if (!kwApiSrvc_1.kwApiSrvc.isType(this.type)) {
            console.error("kwApi::init() type is invalid.");
            return false;
        }
        console.info("kwApi::init() type is ", this.type);
        var sMode = this.type.sMode;
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwApi::init() sMode is invalid.");
            return false;
        }
        this.sMode = sMode;
        var acts = this.type.acts;
        if (!kwActsSrvc_1.kwActsSrvc.isType(this.acts)) {
            console.error("kwApi::init() acts is invalid.");
            return false;
        }
        this.acts = new kwActs_1.kwActs(acts);
        if (!this.acts.init()) {
            console.error("kwApi::init() error creating acts.");
            return false;
        }
        return true;
    };
    kwApi.prototype.getActs = function () {
        return this.acts;
    };
    ;
    kwApi.prototype.getMode = function () {
        return this.sMode;
    };
    ;
    kwApi.prototype.toString = function () {
        return this.constructor.name;
    };
    ;
    kwApi.is = function (obj) {
        return kw_1.kw.is(obj, kwApi);
    };
    return kwApi;
}());
exports.kwApi = kwApi;
