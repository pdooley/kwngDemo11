"use strict";
/**********************************************************************
 *
 * kw/kw/kwXFieldSrvc.ts
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
var kwXFieldArr_1 = require("./kwXFieldArr");
var kwXFieldBool_1 = require("./kwXFieldBool");
var kwXFieldCurr_1 = require("./kwXFieldCurr");
var kwXFieldEnum_1 = require("./kwXFieldEnum");
var kwXFieldLang_1 = require("./kwXFieldLang");
var kwXFieldNum_1 = require("./kwXFieldNum");
var kwXFieldObj_1 = require("./kwXFieldObj");
var kwXFieldStr_1 = require("./kwXFieldStr");
var kwXFieldTime_1 = require("./kwXFieldTime");
var kwXFieldTZ_1 = require("./kwXFieldTZ");
// @formatter:on
var kwXFieldSrvc = (function () {
    function kwXFieldSrvc() {
    }
    kwXFieldSrvc.createFull = function (sType) {
        //console.log("kwXFieldSrvc::createFull() called.");
        if (!kw_1.kw.isString(sType)) {
            console.error("kwXFieldSrvc::createFull() sType is undefined.");
            return;
        }
        //console.info("kwXFieldSrvc::createFull() sType is ", sType);
        var nType = kwXFieldSrvc.toEnum(sType);
        if (!kwXFieldSrvc.in(nType)) {
            console.error("kwXFieldSrvc::createFull() nType is undefined.");
            return;
        }
        console.info("kwXFieldSrvc::create() nType is ", nType);
        var field;
        switch (nType) {
            case kwXFieldEnum_1.kwXFieldEnum.Arr:
                {
                    field = new kwXFieldArr_1.kwXFieldArr();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Bool:
                {
                    field = new kwXFieldBool_1.kwXFieldBool();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Curr:
                {
                    field = new kwXFieldCurr_1.kwXFieldCurr();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Lang:
                {
                    field = new kwXFieldLang_1.kwXFieldLang();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Num:
                {
                    field = new kwXFieldNum_1.kwXFieldNum();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Obj:
                {
                    field = new kwXFieldObj_1.kwXFieldObj();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Str:
                {
                    field = new kwXFieldStr_1.kwXFieldStr();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Time:
                {
                    field = new kwXFieldTime_1.kwXFieldTime();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.TZ:
                {
                    field = new kwXFieldTZ_1.kwXFieldTZ();
                    break;
                }
        }
        if (kw_1.kw.isNull(field)) {
            console.error("kwXFieldSrvc::createFull() field is not valid.");
            return;
        }
        //console.info("kwXFieldSrvc::createFull() field is ", field);
        return field;
    };
    kwXFieldSrvc.createSub = function (nType) {
        //console.log("kwXFieldSrvc::createSub() called.");
        if (!kwXFieldSrvc.in(nType)) {
            console.error("kwXFieldSrvc::createSub() nType is undefined.");
            return;
        }
        //console.info("kwXFieldSrvc::createSub() nType is ", nType);
        var xSrvc;
        switch (nType) {
            case kwXFieldEnum_1.kwXFieldEnum.Arr:
                {
                    xSrvc = new kwXFieldArr_1.kwXFieldArr();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Bool:
                {
                    xSrvc = new kwXFieldBool_1.kwXFieldBool();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Num:
                {
                    xSrvc = new kwXFieldNum_1.kwXFieldNum();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Str:
                {
                    xSrvc = new kwXFieldStr_1.kwXFieldStr();
                    break;
                }
            case kwXFieldEnum_1.kwXFieldEnum.Time:
                {
                    xSrvc = new kwXFieldTime_1.kwXFieldTime();
                    break;
                }
        }
        if (kw_1.kw.isNull(xSrvc)) {
            console.error("kwXFieldSrvc::createSub() xSrvc is not valid.");
            return;
        }
        //console.info("kwXFieldSrvc::createSub() xSrvc is ", field);
        return xSrvc;
    };
    kwXFieldSrvc.isType = function (obj) {
        return false;
    };
    kwXFieldSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwXFieldEnum_1.kwXFieldEnum);
    };
    kwXFieldSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwXFieldEnum_1.kwXFieldEnum);
    };
    ;
    return kwXFieldSrvc;
}());
exports.kwXFieldSrvc = kwXFieldSrvc;
