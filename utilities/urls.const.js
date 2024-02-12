"use strict";
exports.__esModule = true;
exports.URLConst = void 0;
var URLConst = /** @class */ (function () {
    function URLConst() {
    }
    URLConst.getBaseUrl = function () {
        return URLConst._host;
    };
    URLConst._host = '/icompta/api/';
    return URLConst;
}());
exports.URLConst = URLConst;
