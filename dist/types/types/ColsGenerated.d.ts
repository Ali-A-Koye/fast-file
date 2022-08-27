type ColsGenerated = {
  header: string;
  key: string;
  width: "*" | 40 | "auto";
  style?: string;
}[];

type excelCols = {
  header: string;
  key: string;
  width: number;
}[];
export { ColsGenerated, excelCols };
