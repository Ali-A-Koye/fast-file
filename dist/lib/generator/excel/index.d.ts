import DataType from "../../../types/data";
import { Response } from "express";
import { excelCols } from "../../../types/ColsGenerated";
declare const excelGenerator: (columns: excelCols, data: DataType, res: Response, sheetname?: string) => Promise<void>;
export default excelGenerator;
