import columnGen from "./columnGen";
// const pdf = require("./dependencies/pdf/downloader");
// const excel = require("./dependencies/excel/downloader");
import Type from "../types/Type";
import { Response } from "express";
import AsOpType from "../types/AsOp";
import DataType from "../types/data";

const generator = (
  data: DataType,
  type: Type,
  res: Response,
  asOp: AsOpType = []
) => {
  const columns = columnGen(Object.keys(data[0]), type, asOp);

  console.log(columns, data, res, asOp);
  
  switch (type) {
    case "pdf":
      return;
    case "excel":
      return;
    default:
      return;
  }


  if (type == "pdf") {
    // await pdf(columns, init.data, res);
  } else {
    // await excel(columns, init.data, res);
  }
};

export default generator;
