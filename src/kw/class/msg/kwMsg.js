"use strict";
/**********************************************************************
 *
 * kw/class/msg/kwMsg.ts
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
var kwAct_1 = require("../act/kwAct");
var kwHttpHelper_1 = require("../../http/kwHttpHelper");
var kwHttpHelperMock_1 = require("../../http/kwHttpHelperMock");
var kwModeEnum_1 = require("../mode/kwModeEnum");
var kwModeSrvc_1 = require("../mode/kwModeSrvc");
var kwOptionsSrvc_1 = require("../options/kwOptionsSrvc");
var kwOptions_1 = require("../options/kwOptions");
var kwToken_1 = require("../token/kwToken");
var kwUrl_1 = require("../url/kwUrl");
var kwMsgEnum_1 = require("./kwMsgEnum");
var kwMsgSrvc_1 = require("./kwMsgSrvc");
// @formatter:on
var kwMsg = (function () {
    function kwMsg(nType, type) {
        this.nType = nType;
        this.type = type;
        console.log("kwMsg::constructor() is called.");
    }
    kwMsg.prototype.init = function () {
        //console.log("kwMsg::init() called.");
        if (!kwMsgSrvc_1.kwMsgSrvc.in(this.nType)) {
            console.error("kwMsg::init() nType is invalid.");
            return false;
        }
        console.info("kwMsg::init() nType is ", this.nType);
        if (!kwMsgSrvc_1.kwMsgSrvc.isType(this.type)) {
            console.error("kwMsg::init() type is invalid.");
            return false;
        }
        console.info("kwMsg::init() type is ", this.type);
        var act = this.type.act;
        if (!(kwAct_1.kwAct.is(act))) {
            console.error("kwMsg::init() act is invalid");
            return false;
        }
        console.info("kwMsg::init() act is ", act);
        this.act = act;
        var params = this.type.params;
        if (kw_1.kw.isNull(params)) {
            console.error("kwMsg::init() params is not valid.");
            return false;
        }
        console.info("kwMsg::init() params is ", params);
        this.params = params;
        var sMode = this.type.sMode;
        if (!kw_1.kw.isString(sMode)) {
            console.error("kwMsg::init() sMode is invalid.");
            return false;
        }
        console.info("kwMsg::init() sMode is ", sMode);
        this.sMode = sMode;
        var data = this.type.data;
        if (kw_1.kw.isNull(data)) {
            console.error("kwMsg::init() data is invalid.");
            return false;
        }
        console.info("kwMsg::init() data is ", data);
        this.data = data;
        this.createHelper();
        this.createOptions();
        return true;
    };
    kwMsg.prototype.getData = function () {
        return this.data;
    };
    ;
    kwMsg.prototype.getAct = function () {
        return this.act;
    };
    ;
    kwMsg.prototype.getHelper = function () {
        return this.helper;
    };
    kwMsg.prototype.getOptions = function () {
        if (!kwOptionsSrvc_1.kwOptionsSrvc.isType(this.options)) {
            console.error("kwMsg::getOptions() options is invalid");
            return;
        }
        return this.options.getOptions();
    };
    kwMsg.prototype.createHelper = function () {
        //console.log("kwMsg::createHelper() called ");
        if (!kw_1.kw.isString(this.sMode)) {
            console.error("kwMsg::createHelper() sMode is not valid.");
            return false;
        }
        var nMode = kwModeSrvc_1.kwModeSrvc.toEnum(this.sMode);
        if (!kwModeSrvc_1.kwModeSrvc.in(nMode)) {
            console.error("kwMsg::createHelper() sMode is not valid.");
            return false;
        }
        this.helper = (nMode === kwModeEnum_1.kwModeEnum.Live) ? kwHttpHelper_1.kwHttpHelper : kwHttpHelperMock_1.kwHttpHelperMock;
        return true;
    };
    kwMsg.prototype.createOptions = function () {
        //console.log("kwMsg::createOptions() called ");
        if (!kwAct_1.kwAct.is(this.act)) {
            console.error("kwMsg::createOptions() action is invalid");
            return false;
        }
        if (!kw_1.kw.isNull(this.params)) {
            console.error("kwMsg::createOptions() params is invalid");
            return false;
        }
        if (!kw_1.kw.isString(this.sMode)) {
            console.error("kwMsg::createOptions() sMode is invalid");
            return false;
        }
        if (!kwToken_1.kwToken.is(this.token)) {
            console.error("kwMsg::createOptions() token is invalid");
            return false;
        }
        if (!kwUrl_1.kwUrl.is(this.url)) {
            console.error("kwMsg::createOptions() token is invalid");
            return false;
        }
        var info = {
            act: this.act,
            data: this.data,
            params: this.params,
            sMode: this.sMode,
            token: this.token,
            url: this.url,
        };
        var options = new kwOptions_1.kwOptions(info);
        if (!options.init()) {
            console.error("kwMsg::createOptions() error creating options");
            return false;
        }
        this.options = options;
    };
    kwMsg.prototype.isAdd = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Add);
    };
    kwMsg.prototype.isDelete = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Delete);
    };
    kwMsg.prototype.isEdit = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Edit);
    };
    kwMsg.prototype.isGet = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Get);
    };
    kwMsg.prototype.isLogin = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Login);
    };
    kwMsg.prototype.isLogout = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Logout);
    };
    kwMsg.prototype.isNull = function () {
        return (this.nType === kwMsgEnum_1.kwMsgEnum.Null);
    };
    kwMsg.prototype.toString = function () {
        return kw_1.kw.toString(this.nType, kwMsgEnum_1.kwMsgEnum);
    };
    ;
    kwMsg.is = function (obj) {
        return kw_1.kw.is(obj, kwMsg);
    };
    return kwMsg;
}());
exports.kwMsg = kwMsg;
