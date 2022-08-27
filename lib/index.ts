import columnGen from "./columnGen";
import pdfGenerator from "./generator/pdf"
// const pdf = require("./dependencies/pdf/downloader");
// const excel = require("./dependencies/excel/downloader");
import Type from "../types/Type";
import { Response } from "express";
import AsOpType from "../types/AsOp";
import DataType from "../types/data";

const generator = async (
  data: DataType,
  type: Type,
  res: Response,
  asOp: AsOpType = []
) => {
  const columns = columnGen(Object.keys(data[0]), type, asOp);

  switch (type) {
    case "pdf":
      await pdfGenerator(columns, data, res)
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
