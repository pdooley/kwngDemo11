"use strict";
/**********************************************************************
 *
 * kw/kw/kwXFieldArr.ts
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
var kwXField_1 = require("./kwXField");
var kwXFieldEnum_1 = require("./kwXFieldEnum");
// @formatter:on
var kwXFieldArr = (function (_super) {
    __extends(kwXFieldArr, _super);
    function kwXFieldArr() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Arr) || this;
        console.log("kwXField::constructor() is called.");
        return _this;
    }
    kwXFieldArr.prototype.transform = function (val, sName) {
        //console.log("classXFieldArr::transform() called.");
        if (kw_1.kw.isArray(val)) {
            return val;
        }
        console.error("classXFieldArr::transform() field [" + sName + "] is undefined.");
        return undefined;
    };
    return kwXFieldArr;
}(kwXField_1.kwXField));
exports.kwXFieldArr = kwXFieldArr;
