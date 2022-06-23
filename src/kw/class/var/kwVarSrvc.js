"use strict";
/**********************************************************************
 *
 * kw/class/srvc/kwVarSrvc.ts
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
var kwVarEnum_1 = require("./kwVarEnum");
// @formatter:on
var kwVarSrvc = (function () {
    function kwVarSrvc() {
    }
    kwVarSrvc.isType = function (obj) {
        return false;
    };
    kwVarSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwVarEnum_1.kwVarEnum);
    };
    kwVarSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwVarEnum_1.kwVarEnum);
    };
    ;
    return kwVarSrvc;
}());
exports.kwVarSrvc = kwVarSrvc;
