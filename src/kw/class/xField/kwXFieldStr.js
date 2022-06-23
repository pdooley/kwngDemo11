"use strict";
/**********************************************************************
 *
 * kw/class/kwXFieldStr.ts
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
var kwXFieldEnum_1 = require("./kwXFieldEnum");
var kwXField_1 = require("./kwXField");
// @formatter:on
var kwXFieldStr = (function (_super) {
    __extends(kwXFieldStr, _super);
    function kwXFieldStr() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Str) || this;
        console.log("kwXFieldStr::constructor() is called.");
        return _this;
    }
    // static method
    kwXFieldStr.prototype.transform = function (val, sName) {
        //console.log("classXFieldStr::transform() called.");
        if (!kw_1.kw.isString(val)) {
            console.error("kwXFieldStr::transform() field [" + sName + "] is undefined.");
            return null;
        }
        return val;
    };
    return kwXFieldStr;
}(kwXField_1.kwXField));
exports.kwXFieldStr = kwXFieldStr;
