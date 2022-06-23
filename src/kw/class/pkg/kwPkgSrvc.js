"use strict";
/**********************************************************************
 *
 * kw/class/srvc/kwCredSrvc.ts
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
var kwAjaxType_1 = require("./kwAjaxType");
// @formatter:on
var kwAjaxSrvc = (function () {
    function kwAjaxSrvc() {
    }
    kwAjaxSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwAjaxType_1.kwAjaxType);
    };
    kwAjaxSrvc.in = function (nVal) {
        return false;
    };
    kwAjaxSrvc.toEnum = function (sVal) {
        return -1;
    };
    ;
    return kwAjaxSrvc;
}());
exports.kwAjaxSrvc = kwAjaxSrvc;
