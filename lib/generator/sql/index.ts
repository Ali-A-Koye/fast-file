import _ from "lodash";
import DataType from "../../../types/data";
import { Response, text } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const sqlGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `sql_${new Date().getTime()}`
) => {
  let textToWrite: string = "";

  textToWrite += "INSERT INTO $table_name ( \n";
  _.map(columns, (column) => {
    textToWrite += column.header + ", \n";
  });
  textToWrite += ") VALUES \n";

  _.map(dataArray, (data, i) => {
    textToWrite += "(" + Object.values(data).join(", ") + "), \n";
  });

  textToWrite += ";";

  const fileBuffer = Buffer.from(textToWrite, "utf-8");

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  myReadableStreamBuffer.put(fileBuffer);
  myReadableStreamBuffer.stop();
  res.attachment(`${filename}.sql`);
  myReadableStreamBuffer.pipe(res);
};

export default sqlGenerator;
