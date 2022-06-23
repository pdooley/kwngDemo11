"use strict";
/**********************************************************************
 *
 * kw/kw/kwXFieldBool.ts
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
var kwLangData_1 = require("../../main/lang/kwLangData");
var kwXField_1 = require("./kwXField");
var kwXFieldEnum_1 = require("./kwXFieldEnum");
// @formatter:on
var kwXFieldLang = (function (_super) {
    __extends(kwXFieldLang, _super);
    function kwXFieldLang() {
        var _this = _super.call(this, kwXFieldEnum_1.kwXFieldEnum.Lang) || this;
        console.log("kwXFieldLang::constructor() is called.");
        return _this;
    }
    kwXFieldLang.prototype.transform = function (val, sName) {
        //console.log("kwXFieldLang::transform() called.");
        if (!kw_1.kw.isString(val)) {
            console.error("kwXFieldLang::transform() val is undefined.");
            return null;
        }
        console.info("kwXFieldLang::transform() val [" + val + "].");
        var valNew = kwLangData_1.kwLangData.getByCode(val);
        if (kw_1.kw.isNull(valNew)) {
            console.error("kwXFieldLang::transform() field [" + sName + "] is undefined.");
            return undefined;
        }
        return valNew;
    };
    return kwXFieldLang;
}(kwXField_1.kwXField));
exports.kwXFieldLang = kwXFieldLang;
