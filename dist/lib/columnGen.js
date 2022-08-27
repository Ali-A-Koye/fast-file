"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colGenerator = function (keys, type, asOp) {
    var cols = [];
    if (asOp.length > 0) {
        cols = asOp.map(function (el) {
            return {
                header: el.as,
                key: el.field,
                width: type == "pdf" ? "auto" : 40,
            };
        });
    }
    else {
        cols = keys.map(function (el) {
            return {
                header: el,
                key: el,
                width: type == "pdf" ? "*" : 40,
            };
        });
    }
    return cols;
};
exports.default = colGenerator;
