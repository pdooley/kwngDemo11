"use strict";
/**********************************************************************
 *
 * kw/class/api/kwParamSrvc.ts
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
var kwParamEnum_1 = require("./kwParamEnum");
var kwParamType_1 = require("./kwParamType");
// @formatter:on
var kwParamSrvc = (function () {
    function kwParamSrvc() {
    }
    kwParamSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwParamType_1.kwParamType);
    };
    kwParamSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwParamEnum_1.kwParamEnum);
    };
    kwParamSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwParamEnum_1.kwParamEnum);
    };
    ;
    return kwParamSrvc;
}());
exports.kwParamSrvc = kwParamSrvc;
