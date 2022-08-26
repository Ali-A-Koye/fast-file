import generator from "../lib/index";
import { Response } from "express";

test("Test function parameters", () => {
  let data = [
    { name: "john", age: 12 },
    { name: "john", age: 12 },
  ];
  let res = {} as Response; //Mock response object
  generator(data, "pdf", res, [
    { field: "name", as: "Name" },
    { field: "age", as: "Age" },
  ]);
});
