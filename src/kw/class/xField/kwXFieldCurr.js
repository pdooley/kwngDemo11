"use strict";
/**********************************************************************
 *
 * kw/class/xField/kwXFieldCurr.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @formatter:off
var kw_1 = require("../../kw");
var kwCurrData_1 = require("../../main/curr/kwCurrData");
var kwXField_1 = require("./kwXField");
var kwXFieldEnum_1 = require("./kwXFieldEnum");
// @formatter:on
var kwXFieldCurr = (function (_super) {
    __extends(kwXFieldCurr, _super);
    function kwXFieldCurr() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Curr) || this;
        console.log("kwXFieldCurr::constructor() is called.");
        return _this;
    }
    kwXFieldCurr.prototype.transform = function (val, sName) {
        //console.log("classXFieldCurr::transform() called.");
        if (!kw_1.kw.isString(val)) {
            console.error("classXFieldCurr::transform() val is invalid.");
            return null;
        }
        var valNew = kwCurrData_1.kwCurrData.getByCode(val);
        if (kw_1.kw.isNull(valNew)) {
            console.error("classXFieldCurr::transform() field [" + sName + "] is undefined.");
            return null;
        }
        return valNew;
    };
    return kwXFieldCurr;
}(kwXField_1.kwXField));
exports.kwXFieldCurr = kwXFieldCurr;
