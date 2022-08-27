import Type from "../types/Type";
import AsOpType from "../types/AsOp";
import ColumnGenKeys from "../types/ColumnGenKey";
import { ColsGenerated } from "../types/ColsGenerated";
declare const colGenerator: (keys: ColumnGenKeys, type: Type, asOp: AsOpType) => ColsGenerated;
export default colGenerator;
