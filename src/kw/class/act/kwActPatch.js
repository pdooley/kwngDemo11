"use strict";
/**********************************************************************
 *
 * kw/class/act/kwActPost.ts
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
var kwAct_1 = require("./kwAct");
var kwActEnum_1 = require("./kwActEnum");
// @formatter:on
var kwActPatch = (function (_super) {
    __extends(kwActPatch, _super);
    function kwActPatch(data) {
        var _this = _super.call(this, kwActEnum_1.kwActEnum.Patch, data) || this;
        _this.data = data;
        return _this;
    }
    return kwActPatch;
}(kwAct_1.kwAct));
exports.kwActPatch = kwActPatch;
