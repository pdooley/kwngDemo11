"use strict";
/**********************************************************************
 *
 * kw/class/kwParam.ts
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
var kwVarEnum_1 = require("../var/kwVarEnum");
var kwVarSrvc_1 = require("../var/kwVarSrvc");
var kwXField_1 = require("../xField/kwXField");
var kwParamEnum_1 = require("./kwParamEnum");
var kwParamSrvc_1 = require("./kwParamSrvc");
// @formatter:on
var kwParam = (function () {
    function kwParam(nType, type) {
        this.nType = nType;
        this.type = type;
        this.bIsRequired = true;
        this.bIsVisible = true;
        console.log("kwParam::constructor() is called.");
    }
    kwParam.prototype.setDefault = function (val) {
        this.valDefault = val;
    };
    kwParam.prototype.init = function () {
        //console.log("kwParam::init() called.");
        if (!kwParamSrvc_1.kwParamSrvc.in(this.nType)) {
            console.error("kwParam::init() nType is invalid.");
            return false;
        }
        console.info("kwParam::init() nType is ", this.nType);
        if (!kwParamSrvc_1.kwParamSrvc.isType(this.type)) {
            console.error("kwParam::init() type is invalid.");
            return false;
        }
        console.info("kwParam::init() type is ", this.type);
        if (!this.loadAttrs()) {
            console.error("kwParam::init() error loading attributes.");
            return false;
        }
        if (!this.loadNames()) {
            console.error("kwParam::init() error loading names.");
            return false;
        }
        if (!this.processDefault()) {
            console.error("kwParam::init() error loading default.");
            return false;
        }
        if (!this.loadSrvcs()) {
            console.error("kwParam::init() error loading services.");
            return false;
        }
        return true;
    };
    ;
    kwParam.prototype.addDefault = function (rec) {
        //console.log("kwParam::addDefault() called.");
        if (kw_1.kw.isNull(rec)) {
            console.error("kwParam::addDefault() rec is invalid.");
            return false;
        }
        if (!kw_1.kw.isString(this.sNameInt)) {
            console.error("kwParam::addDefault() sNameInt is invalid.");
            return false;
        }
        console.info("kwParam::addDefault() sNameInt is ", this.sNameInt);
        rec[this.sNameInt] = this.valDefault;
        return true;
    };
    kwParam.prototype.loadAttrs = function () {
        //console.log("kwParam::loadAttrs() called.");
        if (!kwParamSrvc_1.kwParamSrvc.isType(this.type)) {
            console.error("kwParam::loadAttrs() type is invalid.");
            return false;
        }
        console.info("kwParam::loadAttrs() type is ", this.type);
        this.bIsRequired = this.type.bIsRequired;
        console.info("kwParam::loadAttrs() bIsRequired is ", this.bIsRequired);
        this.bIsVisible = this.type.bIsVisible;
        console.info("kwParam::loadAttrs() bIsVisible is ", this.bIsVisible);
        var nPosition = this.type.nPosition;
        if (!kw_1.kw.isNumber(nPosition)) {
            console.error("kwParam::loadAttrs() nPosition is invalid.");
            return false;
        }
        console.info("kwParam::loadAttrs() nPosition is ", nPosition);
        this.nPosition = nPosition;
        return true;
    };
    kwParam.prototype.loadNames = function () {
        //console.log("kwParam::loadNames() called.");
        if (!kwParamSrvc_1.kwParamSrvc.isType(this.type)) {
            console.error("kwParam::loadNames() type is invalid.");
            return false;
        }
        console.info("kwParam::loadNames() type is ", this.type);
        var sNameExt = this.type.sNameExt;
        if (!kw_1.kw.isString(sNameExt)) {
            console.error("kwParam::loadNames() sNameExt is invalid.");
            return false;
        }
        //console.info("kwParam::loadNames() sNameExt is ", sNameExt);
        this.sNameExt = sNameExt;
        var sNameInt = this.type.sNameInt;
        if (!kw_1.kw.isString(sNameInt)) {
            console.error("kwParam::loadNames() sNameInt is invalid.");
            return false;
        }
        //console.info("kwParam::loadNames() sNameInt is ", sNameInt);
        this.sNameInt = sNameInt;
        return true;
    };
    kwParam.prototype.loadSrvcs = function () {
        //console.log("kwParam::loadSrvcs() called.");
        if (!kwParamSrvc_1.kwParamSrvc.isType(this.type)) {
            console.error("kwParam::loadSrvcs() type is invalid.");
            return false;
        }
        console.info("kwParam::loadSrvcs() type is ", this.type);
        var sSrvcIn = this.type.sSrvcIn;
        if (!kw_1.kw.isString(sSrvcIn)) {
            console.error("kwParam::loadSrvcs() sSrvcIn is invalid.");
            return false;
        }
        console.info("kwParam::loadSrvcs() sSrvcIn is ", sSrvcIn);
        var nVar = kwVarSrvc_1.kwVarSrvc.toEnum(sSrvcIn);
        if (!kwVarSrvc_1.kwVarSrvc.in(nVar)) {
            console.error("kwParam::loadSrvcs() nVar is invalid.");
            return false;
        }
        console.info("kwParam::loadSrvcs() nVar is ", nVar);
        this.nVar = nVar;
        var srvcIn = this.loadSrvc(sSrvcIn);
        if (!kwXField_1.kwXField.is(srvcIn)) {
            console.error("kwParam::loadSrvcs() srvcOut is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() srvcOut is ", srvcOut);
        this.srvcIn = srvcIn;
        var sSrvcOut = this.type.sSrvcOut;
        if (!kw_1.kw.isString(sSrvcOut)) {
            console.error("kwParam::loadSrvcs() sSrvcOut is invalid.");
            return false;
        }
        console.info("kwParam::loadSrvcs() sSrvcOut is ", sSrvcOut);
        var srvcOut = this.loadSrvc(sSrvcOut);
        if (!kwXField_1.kwXField.is(srvcOut)) {
            console.error("kwParam::loadSrvcs() srvcOut is invalid.");
            return false;
        }
        //console.info("kwParam::loadSrvcs() srvcOut is ", srvcOut);
        this.srvcOut = srvcOut;
        return true;
    };
    ;
    kwParam.prototype.xExport = function (rec, recX) {
        //console.log("kwParam::xExport() called.");
        if (kw_1.kw.isNull(rec)) {
            console.error("kwParam::xExport() rec is invalid.");
            return false;
        }
        if (kw_1.kw.isNull(recX)) {
            console.error("kwParam::xExport() recX is invalid.");
            return false;
        }
        if (!kw_1.kw.isFunction(this.srvcOut)) {
            console.error("kwParam::xExport() srvcOut is invalid.");
            return false;
        }
        console.info("kwParam::xExport() srvcOut is ", this.srvcOut);
        if (!kw_1.kw.isString(this.sNameInt)) {
            console.error("kwParam::xExport() sNameInt is invalid.");
            return false;
        }
        console.info("kwParam::xExport() sNameInt is ", this.sNameInt);
        if (!kw_1.kw.isString(this.sNameExt)) {
            console.error("kwParam::xExport() sNameExt is invalid.");
            return false;
        }
        console.info("kwParam::xExport() sNameExt is ", this.sNameExt);
        if (!rec.hasOwnProperty(this.sNameInt)) {
            if (this.bIsRequired) {
                console.error("kwParam::xExport() field [" + this.sNameInt + "] is missing.");
            }
            recX[this.sNameExt] = null;
            return true;
        }
        var val = rec[this.sNameInt];
        if (val === null || typeof val === "undefined") {
            if (this.bIsRequired) {
                console.error("kwParam::xExport() field [" + this.sNameExt + "] is null.");
            }
            recX[this.sNameInt] = null;
            return true;
        }
        //console.info("kwParam::xExport() val is ", val);
        recX[this.sNameExt] = this.srvcOut.transform(val, this.sNameInt);
        return true;
    };
    kwParam.prototype.xImport = function (rec, recX, bCreate) {
        //console.log("classParam::xImport() called.");                                                               
        if (!kwVarSrvc_1.kwVarSrvc.in(this.nVar)) {
            console.error("classParam::xImport() nVar is invalid.");
            return false;
        }
        if (kw_1.kw.isNull(rec)) {
            console.error("classParam::xImport() rec is invalid.");
            return false;
        }
        if (kw_1.kw.isNull(recX)) {
            console.error("classParam::xImport() recX is invalid.");
            return false;
        }
        if (!kw_1.kw.isFunction(this.srvcIn)) {
            console.error("classParam::xImport() srvcIn is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() srvcIn is ", this.srvcIn);                                             
        if (!kw_1.kw.isString(this.sNameInt)) {
            console.error("classParam::xImport() sNameInt is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() sFieldIn is ", this.sFieldIn);                                         
        if (!kw_1.kw.isString(this.sNameExt)) {
            console.error("classParam::xImport() sNameExt is invalid.");
            return false;
        }
        //console.debug("classParam::xImport() sFieldExt is ", this.sFieldExt);                                       
        if (!rec.hasOwnProperty(this.sNameExt)) {
            if (this.bIsRequired) {
                console.error("classParam::xImport() field [" + this.sNameExt + "] is missing.");
            }
            recX[this.sNameInt] = undefined;
            return;
        }
        var val = rec[this.sNameExt];
        if (val === null || typeof val === "undefined") {
            if (this.bIsRequired) {
                console.error("classParam::xImport() field [" + this.sNameExt + "] is null.");
            }
            recX[this.sNameInt] = undefined;
            return;
        }
        //console.debug("classParam::xImport() val is ", val);                                                        
        recX[this.sNameInt] = this.srvcIn.transform(val, this.sNameExt);
    };
    kwParam.prototype.isArr = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Arr;
    };
    kwParam.prototype.isBool = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Bool;
    };
    kwParam.prototype.isNull = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Nulld;
    };
    kwParam.prototype.isNum = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Num;
    };
    kwParam.prototype.isObj = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Obj;
    };
    kwParam.prototype.isStr = function () {
        return this.nVar === kwVarEnum_1.kwVarEnum.Str;
    };
    kwParam.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwParamEnum_1.kwParamEnum);
    };
    ;
    kwParam.is = function (obj) {
        return kw_1.kw.is(obj, kwParam);
    };
    return kwParam;
}());
exports.kwParam = kwParam;
