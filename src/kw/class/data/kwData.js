"use strict";
/**********************************************************************
 *
 * kw/class/data/kwData.ts
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
var kwDataEnum_1 = require("./kwDataEnum");
var kwDataSrvc_1 = require("./kwDataSrvc");
// @formatter:on
var kwData = (function () {
    function kwData(nType) {
        this.nType = nType;
        console.log("kwData::constructor() is called.");
    }
    kwData.prototype.init = function () {
        console.log("kwData::init() is called.");
        if (!kwDataSrvc_1.kwDataSrvc.in(this.nType)) {
            console.error("kwCol::init() nType is invalid.");
            return false;
        }
        console.info("kwCol::init() nType is ", this.nType);
        return true;
    };
    kwData.prototype.isArray = function () {
        return (this.nType === kwDataEnum_1.kwDataEnum.Array);
    };
    kwData.prototype.isBoolean = function () {
        return (this.nType === kwDataEnum_1.kwDataEnum.Boolean);
    };
    kwData.prototype.isNull = function () {
        return (this.nType === kwDataEnum_1.kwDataEnum.Null);
    };
    kwData.prototype.isNumber = function () {
        return (this.nType === kwDataEnum_1.kwDataEnum.Number);
    };
    kwData.prototype.isString = function () {
        return (this.nType === kwDataEnum_1.kwDataEnum.String);
    };
    kwData.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwDataEnum_1.kwDataEnum);
    };
    ;
    kwData.is = function (obj) {
        return kw_1.kw.is(obj, kwData);
    };
    return kwData;
}());
exports.kwData = kwData;
