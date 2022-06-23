"use strict";
/**********************************************************************
 *
 * kw/class/api/kwModeSrvc.ts
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
var kwModeEnum_1 = require("./kwModeEnum");
// @formatter:on
var kwModeSrvc = (function () {
    function kwModeSrvc() {
    }
    kwModeSrvc.isType = function (obj) {
        return false;
    };
    kwModeSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwModeEnum_1.kwModeEnum);
    };
    kwModeSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwModeEnum_1.kwModeEnum);
    };
    ;
    return kwModeSrvc;
}());
exports.kwModeSrvc = kwModeSrvc;
