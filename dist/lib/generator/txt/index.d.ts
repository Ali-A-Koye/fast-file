import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
declare const txtGenerator: (columns: ColsGenerated, dataArray: DataType, res: Response, filename?: string) => Promise<void>;
export default txtGenerator;
