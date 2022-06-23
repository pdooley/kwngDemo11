"use strict";
/**********************************************************************
 *
 * kw/class/api/kwMdlSrvc.ts
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
var kwMdlType_1 = require("./kwMdlType");
// @formatter:on
var kwMdlSrvc = (function () {
    function kwMdlSrvc() {
    }
    kwMdlSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwMdlType_1.kwMdlType);
    };
    kwMdlSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwMdlEnum_1.kwMdlEnum);
    };
    kwMdlSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwMdlEnum_1.kwMdlEnum);
    };
    ;
    kwMdlSrvc.xExport = function (srvc, recs) {
        //console.log("kwMdlSrvc::xExport() called.");
        if (kw_1.kw.isNull(srvc)) {
            console.error("kwMdlSrvc::xExport() srvc is invalid.");
            return;
        }
        if (!kw_1.kw.isArray(recs)) {
            console.error("kwMdlSrvc::xExport() recs is invalid.");
            return;
        }
        var recsX = srvc.xExport(recs);
        if (!kw_1.kw.isArray(recsX)) {
            console.error("kwMdlSrvc::xExport() recsX is invalid.");
            return;
        }
        return recsX;
    };
    ;
    kwMdlSrvc.xExportRec = function (srvc, record) {
        //console.log("kwMdlSrvc::xExportRec() called.");
        if (kw_1.kw.isNull(srvc)) {
            console.error("kwMdlSrvc::xExportRec() srvc is invalid.");
            return;
        }
        if (kw_1.kw.isNull(record)) {
            console.error("kwMdlSrvc::xExportRec() record is invalid.");
            return;
        }
        var recX = srvc.xExportRec(record);
        if (kw_1.kw.isNull(recX)) {
            console.error("kwMdlSrvc::xExportRec() recX is invalid.");
            return;
        }
        return recX;
    };
    ;
    kwMdlSrvc.xImport = function (srvc, recs) {
        //console.log("kwMdlSrvc::xImport() called.");
        if (kw_1.kw.isNull(srvc)) {
            console.error("kwMdlSrvc::xImport() srvc is invalid.");
            return false;
        }
        if (!kw_1.kw.isArray(recs)) {
            console.error("kwMdlSrvc::xImport() recs is invalid.");
            return false;
        }
        var recsX = srvc.xImport(recs);
        if (!kw_1.kw.isArray(recsX)) {
            console.error("kwMdlSrvc::xImport() recsX is invalid.");
            return;
        }
        return recsX;
    };
    ;
    kwMdlSrvc.xImportRec = function (srvc, rec) {
        //console.log("kwMdlSrvc::xImportRec() called.");
        if (kw_1.kw.isNull(srvc)) {
            console.error("kwMdlSrvc::xImportRec() srvc is invalid.");
            return false;
        }
        if (kw_1.kw.isNull(rec)) {
            console.error("kwMdlSrvc::xImportRec() rec is invalid.");
            return false;
        }
        var recX = srvc.xImportRec(rec);
        if (kw_1.kw.isNull(recX)) {
            console.error("kwMdlSrvc::xImportRec() recX is invalid.");
            return;
        }
        return recX;
    };
    ;
    return kwMdlSrvc;
}());
exports.kwMdlSrvc = kwMdlSrvc;
