"use strict";
/**********************************************************************
 *
 * kw/class/model/kwMdl.ts
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
var kwMdlEnum_1 = require("./kwMdlEnum");
var kwMdlSrvc_1 = require("./kwMdlSrvc");
// @formatter:on
var kwMdl = (function () {
    function kwMdl(nType, type) {
        this.nType = nType;
        this.type = type;
        console.log("kwMdl::constructor() is called.");
    }
    kwMdl.prototype.init = function () {
        //console.log("kwMdl::init() called.");
        if (!kwMdlSrvc_1.kwMdlSrvc.in(this.nType)) {
            console.error("kwMdl::init() nType is not valid.");
            return false;
        }
        console.info("kwMdl::init() nType is ", this.nType);
        if (!kwMdlSrvc_1.kwMdlSrvc.isType(this.type)) {
            console.error("kwMdl::init() type is not valid.");
            return false;
        }
        console.info("kwMdl::init() type is ", this.type);
        var params = this.type.params;
        if (kw_1.kw.isNull(params)) {
            console.error("kwMdl::init() params is not valid.");
            return false;
        }
        console.info("kwMdl::init() params is ", params);
        if (!this.createParams(params)) {
            console.error("kwMdl::init() error creating params.");
            return false;
        }
        return true;
    };
    kwMdl.prototype.createRecord = function () {
        //console.log("kwMdl::createRecord() called.");
        if (!kw_1.kw.isArray(this.params)) {
            console.error("kwMdl::createRecord() params is not valid.");
            return;
        }
        //console.info("kwMdl::createRecord() params is ", this.params);
        var record;
        for (var i = 0; i < this.params.length; i++) {
            var param = this.params[i];
            if (kw_1.kw.isNull(param)) {
                console.error("kwMdl::createRecord() param is not valid.");
                return;
            }
            //console.info("kwMdl::createRecord() param is ", param);
            param.addDefault(record);
        }
        //console.info("kwMdl::createRecord() record is ", record);
        return record;
    };
    kwMdl.prototype.createParams = function (params) {
        //console.log("kwMdl::createParams() called.");
        if (!kw_1.kw.isArray(params)) {
            console.error("kwMdl::createParams() params is not valid.");
            return;
        }
        //console.info("kwMdl::createParams() params is ", params);
        for (var i = 0; i < params.length; i++) {
            var param = params[i];
            if (kw_1.kw.isNull(param)) {
                console.error("kwMdl::createParams() param is not valid.");
                return false;
            }
            //console.info("kwMdl::createParams() param is ", param);
            //console.info("kwMdl::createParams() params is ", this.params);
            var obj = this.createParam(param);
            if (kw_1.kw.isNull(obj)) {
                console.error("kwMdl::createParams() obj is not valid.");
                return false;
            }
            //console.info("kwMdl::createParams() obj is ", obj);
            this.params.push(obj);
        }
        console.info("kwMdl::createParams() params is ", this.params);
        return true;
    };
    kwMdl.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwMdlEnum_1.kwMdlEnum);
    };
    ;
    kwMdl.is = function (obj) {
        return kw_1.kw.is(obj, kwMdl);
    };
    return kwMdl;
}());
exports.kwMdl = kwMdl;
