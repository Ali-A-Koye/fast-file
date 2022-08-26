import Type from "../types/Type";
import AsOpType from "../types/AsOp";
import ColumnGenKeys from "../types/ColumnGenKey";

const colGenerator = (keys: ColumnGenKeys, type: Type, asOp: AsOpType) => {
  let cols: {
    header: string;
    key: string;
    width: "*" | 40 | "auto";
  }[] = [];

  if (asOp.length > 0) {
    cols = asOp.map((el) => {
      return {
        header: el.as,
        key: el.field,
        width: type == "pdf" ? "auto" : 40,
      };
    });
  } else {
    cols = keys.map((el) => {
      return {
        header: el,
        key: el,
        width: type == "pdf" ? "*" : 40,
      };
    });
  }

  return cols;
};

export default colGenerator;
