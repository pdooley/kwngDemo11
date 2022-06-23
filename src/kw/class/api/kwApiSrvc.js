"use strict";
/**********************************************************************
 *
 * kw/class/api/kwApiSrvc.ts
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
var kwApiType_1 = require("./kwApiType");
// @formatter:on
var kwApiSrvc = (function () {
    function kwApiSrvc() {
    }
    kwApiSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwApiType_1.kwApiType);
    };
    kwApiSrvc.in = function (nVal) {
        return false;
    };
    kwApiSrvc.toEnum = function (sVal) {
        return -1;
    };
    ;
    return kwApiSrvc;
}());
exports.kwApiSrvc = kwApiSrvc;
