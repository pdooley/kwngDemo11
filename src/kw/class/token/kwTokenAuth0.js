"use strict";
/**********************************************************************
 *
 * kw/class/token/kwTokenAuth0.ts
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
var kwTokenAuth0 = (function (_super) {
    __extends(kwTokenAuth0, _super);
    function kwTokenAuth0(sToken) {
        var _this = _super.call(this, kwTokenEnum_1.kwTokenEnum.Auth0, sToken) || this;
        _this.sToken = sToken;
        console.log("kwTokenAuth0::constructor() is called.");
        return _this;
    }
    return kwTokenAuth0;
}(kwToken_1.kwToken));
exports.kwTokenAuth0 = kwTokenAuth0;
