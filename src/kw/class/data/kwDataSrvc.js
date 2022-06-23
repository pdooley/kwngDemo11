"use strict";
/**********************************************************************
 *
 * kw/class/api/kwDataSrvc.ts
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
var kwDataEnum_1 = require("./kwDataEnum");
// @formatter:on
var kwDataSrvc = (function () {
    function kwDataSrvc() {
    }
    kwDataSrvc.isType = function (obj) {
        return false;
    };
    kwDataSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwDataEnum_1.kwDataEnum);
    };
    kwDataSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwDataEnum_1.kwDataEnum);
    };
    ;
    return kwDataSrvc;
}());
exports.kwDataSrvc = kwDataSrvc;
