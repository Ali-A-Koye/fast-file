"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lib_1 = __importDefault(require("../../dist/lib"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});
app.get("/pdf", (req, res) => {
    let data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "pdf", res);
});
app.get("/docx", (req, res) => {
    let data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "docx", res);
});
app.get("/excel", (req, res) => {
    let data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "excel", res);
});
app.get("/csv", (req, res) => {
    let data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "csv", res);
});
app.get("/txt", (req, res) => {
    let data = [
        { name: "john", age: 12 },
        { name: "john", age: 12 },
    ];
    (0, lib_1.default)(data, "txt", res);
});
const server = app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = server;
