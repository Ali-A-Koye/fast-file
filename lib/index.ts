import columnGen from "./columnGen";
import Type from "../types/Type";
import { Response } from "express";
import AsOpType from "../types/AsOp";
import DataType from "../types/data";

import pdfGenerator from "./generator/pdf"
import excelGenerator from "./generator/excel"  
import docxGenerator from "./generator/docx"
import csvGenerator from "./generator/csv"
import {excelCols} from "../types/ColsGenerated";

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
      await excelGenerator(columns as excelCols, data, res)
      return;
    case "docx": 
      await docxGenerator(columns, data, res)
      return;
    case "csv": 
      await csvGenerator(columns, data, res)
      return;
    default:
      return;
  }
};

export default generator;
