"use strict";
/**********************************************************************
 *
 * kw/class/api/kwOptionsSrvc.ts
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
var kwOptionsType_1 = require("./kwOptionsType");
// @formatter:on
var kwOptionsSrvc = (function () {
    function kwOptionsSrvc() {
    }
    kwOptionsSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwOptionsType_1.kwOptionsType);
    };
    kwOptionsSrvc.in = function (nVal) {
        return false;
    };
    kwOptionsSrvc.toEnum = function (sVal) {
        return -1;
    };
    ;
    return kwOptionsSrvc;
}());
exports.kwOptionsSrvc = kwOptionsSrvc;
