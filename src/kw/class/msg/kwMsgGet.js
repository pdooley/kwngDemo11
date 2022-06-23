"use strict";
/**********************************************************************
 *
 * kw/class/kwMsgGet.ts
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
var kwMsg_1 = require("./kwMsg");
var kwMsgEnum_1 = require("./kwMsgEnum");
// @formatter:on
var kwMsgGet = (function (_super) {
    __extends(kwMsgGet, _super);
    function kwMsgGet(type) {
        var _this = _super.call(this, kwMsgEnum_1.kwMsgEnum.Get, type) || this;
        console.log("kwMsgGet::constructor() is called.");
        return _this;
    }
    return kwMsgGet;
}(kwMsg_1.kwMsg));
exports.kwMsgGet = kwMsgGet;
