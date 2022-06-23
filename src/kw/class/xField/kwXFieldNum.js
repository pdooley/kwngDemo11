"use strict";
/**********************************************************************
 *
 * kw/class/kwXFieldNum.ts
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
var kwXFieldNum = (function (_super) {
    __extends(kwXFieldNum, _super);
    function kwXFieldNum() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Num) || this;
        console.log("kwXFieldNum::constructor() is called.");
        return _this;
    }
    kwXFieldNum.prototype.transform = function (val, sName) {
        //console.log("classXFieldNum::transform() called.");
        var nVal = kw_1.kw.toNumber(val);
        if (!kw_1.kw.isNumber(nVal)) {
            console.error("classXFieldNum::transform() field [" + sName + "] is undefined.");
            return null;
        }
        return nVal;
    };
    return kwXFieldNum;
}(kwXField_1.kwXField));
exports.kwXFieldNum = kwXFieldNum;
