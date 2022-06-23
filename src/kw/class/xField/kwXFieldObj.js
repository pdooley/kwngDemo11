"use strict";
/**********************************************************************
 *
 * kw/class/kwXFieldObj.ts
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
var kwXFieldObj = (function (_super) {
    __extends(kwXFieldObj, _super);
    function kwXFieldObj() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Obj) || this;
        console.log("kwXFieldObj::constructor() is called.");
        return _this;
    }
    kwXFieldObj.prototype.transform = function (val, sName) {
        //console.log("classXFieldObj::transform() called.");
        if (kw_1.kw.isNull(val)) {
            console.error("kwXFieldObj::transform() field [" + sName + "] is undefined.");
        }
        return val;
    };
    return kwXFieldObj;
}(kwXField_1.kwXField));
exports.kwXFieldObj = kwXFieldObj;
;
