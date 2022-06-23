"use strict";
/**********************************************************************
 *
 * kw/kw/kwXField.ts
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
var kwXFieldEnum_1 = require("./kwXFieldEnum");
var kwXFieldSrvc_1 = require("./kwXFieldSrvc");
// @formatter:on
var kwXField = (function () {
    function kwXField(nType) {
        this.nType = nType;
        console.log("kwXField::constructor() is called.");
    }
    kwXField.prototype.init = function () {
        console.log("kwAct::init() is called.");
        if (!kwXFieldSrvc_1.kwXFieldSrvc.in(this.nType)) {
            console.error("kwAct::init() nType is invalid.");
            return false;
        }
        console.info("kwAct::init() nType is ", this.nType);
    };
    kwXField.prototype.isArr = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Arr);
    };
    kwXField.prototype.isBool = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Bool);
    };
    kwXField.prototype.isCur = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Cur);
    };
    kwXField.prototype.islang = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Lang);
    };
    kwXField.prototype.isNum = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Num);
    };
    kwXField.prototype.isObj = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Obj);
    };
    kwXField.prototype.isStr = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Str);
    };
    kwXField.prototype.isTime = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.Time);
    };
    kwXField.prototype.isTZ = function () {
        return (this.nType === kwXFieldEnum_1.kwXFieldEnum.TZ);
    };
    kwXField.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwXFieldEnum_1.kwXFieldEnum);
    };
    ;
    kwXField.is = function (obj) {
        return kw_1.kw.is(obj, kwXField);
    };
    return kwXField;
}());
exports.kwXField = kwXField;
