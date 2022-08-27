import Type from "../types/Type";
import { Response } from "express";
import AsOpType from "../types/AsOp";
import DataType from "../types/data";
declare const generator: (data: DataType, type: Type, res: Response, asOp?: AsOpType) => Promise<void>;
export default generator;
