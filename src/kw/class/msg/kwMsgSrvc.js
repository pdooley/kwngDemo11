"use strict";
/**********************************************************************
 *
 * kw/class/api/kwMsgSrvc.ts
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
var kwApi_1 = require("../api/kwApi");
var kwMsgAdd_1 = require("./kwMsgAdd");
var kwMsgDelete_1 = require("./kwMsgDelete");
var kwMsgEdit_1 = require("./kwMsgEdit");
var kwMsgEnum_1 = require("./kwMsgEnum");
var kwMsgGet_1 = require("./kwMsgGet");
var kwMsgType_1 = require("./kwMsgType");
// @formatter:on
var kwMsgSrvc = (function () {
    function kwMsgSrvc() {
    }
    kwMsgSrvc.add = function (data, params, api) {
        //console.log("kwMsgSrvc::add() called.");
        if (kw_1.kw.isNull(data)) {
            console.error("kwMsgSrvc::add() data is invalid.");
            return;
        }
        if (kw_1.kw.isNull(params)) {
            console.error("kwMsgSrvc::add() params is invalid.");
            return;
        }
        if (!kwApi_1.kwApi.is(api)) {
            console.error("kwMsgSrvc::add() api is invalid.");
            return;
        }
        var sMode = api.getMode();
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwMsgSrvc::add() sMode is invalid.");
            return;
        }
        var type = {
            "sMode": api,
            "data": data,
            "params": params
        };
        var msg = new kwMsgAdd_1.kwMsgAdd(type);
        if (!msg.init()) {
            console.error("kwMsgSrvc::add() error creating msg.");
            return;
        }
        return msg;
    };
    ;
    kwMsgSrvc.edit = function (data, params, api) {
        //console.log("kwMsgSrvc::edit() called.");
        if (kw_1.kw.isNull(data)) {
            console.error("kwMsgSrvc::edit() data is invalid.");
            return;
        }
        if (kw_1.kw.isNull(params)) {
            console.error("kwMsgSrvc::edit() params is invalid.");
            return;
        }
        if (!kwApi_1.kwApi.is(api)) {
            console.error("kwMsgSrvc::edit() api is invalid.");
            return;
        }
        var sMode = api.getMode();
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwMsgSrvc::edit() sMode is invalid.");
            return;
        }
        var type = {
            "sMode": api,
            "data": data,
            "params": params
        };
        var msg = new kwMsgEdit_1.kwMsgEdit(type);
        if (!msg.init()) {
            console.error("kwMsgSrvc::edit() error creating msg.");
            return;
        }
        return msg;
    };
    ;
    kwMsgSrvc.get = function (params, api) {
        //console.log("kwMsgSrvc::get() called.");
        if (kw_1.kw.isNull(params)) {
            console.error("kwMsgSrvc::get() params is invalid.");
            return;
        }
        if (!kwApi_1.kwApi.is(api)) {
            console.error("kwMsgSrvc::get() api is invalid.");
            return;
        }
        var sMode = api.getMode();
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwMsgSrvc::get() sMode is invalid.");
            return;
        }
        var type = {
            "sMode": api,
            "data": {},
            "params": params
        };
        var msg = new kwMsgGet_1.kwMsgGet(type);
        if (!msg.init()) {
            console.error("kwMsgSrvc::get() error creating msg.");
            return;
        }
        return msg;
    };
    ;
    kwMsgSrvc.remove = function (params, api) {
        //console.log("kwMsgSrvc::remove() called.");
        if (kw_1.kw.isNull(params)) {
            console.error("kwMsgSrvc::remove() params is invalid.");
            return;
        }
        if (!kwApi_1.kwApi.is(api)) {
            console.error("kwMsgSrvc::remove() api is invalid.");
            return;
        }
        var sMode = api.getMode();
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwMsgSrvc::remove() sMode is invalid.");
            return;
        }
        var type = {
            "sMode": api,
            "data": {},
            "params": params
        };
        var msg = new kwMsgDelete_1.kwMsgDelete(type);
        if (!msg.init()) {
            console.error("kwMsgSrvc::remove() error creating msg.");
            return;
        }
        return msg;
    };
    ;
    kwMsgSrvc.isType = function (obj) {
        return kw_1.kw.is(obj, kwMsgType_1.kwMsgType);
    };
    kwMsgSrvc.in = function (nVal) {
        return kw_1.kw.in(nVal, kwMsgEnum_1.kwMsgEnum);
    };
    kwMsgSrvc.toEnum = function (sVal) {
        return kw_1.kw.toEnum(sVal, kwMsgEnum_1.kwMsgEnum);
    };
    ;
    return kwMsgSrvc;
}());
exports.kwMsgSrvc = kwMsgSrvc;
