import _ from "lodash";
import DataType from "../../../types/data";
import { Response, text } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const txtGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `txt_${new Date().getTime()}`
) => {
  let textToWrite: string = "";

  textToWrite += "Headers : ";
  _.map(columns, (column) => {
    textToWrite += column.header + ", ";
  });
  textToWrite += "\n";

  _.map(dataArray, (data, i) => {
    textToWrite += `Row : ${i + 1} : ` + Object.values(data).join(", ") + "\n";
  });
  const fileBuffer = Buffer.from(textToWrite, "utf-8");

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  myReadableStreamBuffer.put(fileBuffer);
  myReadableStreamBuffer.stop();
  res.attachment(`${filename}.txt`);
  myReadableStreamBuffer.pipe(res);
};

export default txtGenerator;
