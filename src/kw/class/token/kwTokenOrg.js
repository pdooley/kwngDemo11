"use strict";
/**********************************************************************
 *
 * kw/class/token/kwTokenOrg.ts
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
var kwToken_1 = require("./kwToken");
var kwTokenEnum_1 = require("./kwTokenEnum");
// @formatter:on
var kwTokenOrg = (function (_super) {
    __extends(kwTokenOrg, _super);
    function kwTokenOrg(sToken) {
        var _this = _super.call(this, kwTokenEnum_1.kwTokenEnum.Org, sToken) || this;
        _this.sToken = sToken;
        console.log("kwTokenOrg::constructor() is called.");
        return _this;
    }
    return kwTokenOrg;
}(kwToken_1.kwToken));
exports.kwTokenOrg = kwTokenOrg;
