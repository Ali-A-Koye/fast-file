"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../lib/index"));
test("Test function parameters", function () {
    var data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    var res = {}; //Mock express response object
    (0, index_1.default)(data, "pdf", res, [
        { field: "name", as: "Name" },
        { field: "age", as: "Age" },
    ]);
});
