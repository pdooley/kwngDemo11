"use strict";
/**********************************************************************
 *
 * kw/class/kwXFieldTZ.ts
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
var kwTZData_1 = require("../../main/TZ/kwTZData");
var kwXField_1 = require("./kwXField");
var kwXFieldEnum_1 = require("./kwXFieldEnum");
// @formatter:on
var kwXFieldTZ = (function (_super) {
    __extends(kwXFieldTZ, _super);
    function kwXFieldTZ() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.TZ) || this;
        console.log("kwXFieldTZ::constructor() is called.");
        return _this;
    }
    kwXFieldTZ.prototype.transform = function (val, sName) {
        //console.log("kwXFieldTZ::transform() called.");
        if (!kw_1.kw.isString(val)) {
            console.error("kwXFieldTZ::transform() field [" + sName + "] is undefined.");
            return null;
        }
        var valNew = kwTZData_1.kwTZData.getByCode(sVal);
        if (kw_1.kw.isNull(valNew)) {
            console.error("kwXFieldTZ::transform() field [" + sName + "] is undefined.");
            return null;
        }
        return valNew;
    };
    return kwXFieldTZ;
}(kwXField_1.kwXField));
exports.kwXFieldTZ = kwXFieldTZ;
