"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var lib_1 = __importDefault(require("../dist/lib"));
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (req, res) {
    res.send("Welcome to the server!");
});
app.get("/pdf", function (req, res) {
    var data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "pdf", res);
});
app.get("/excel", function (req, res) {
    var data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "excel", res);
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
