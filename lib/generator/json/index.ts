import _ from "lodash";
import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const jsonGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `Json_${new Date().getTime()}`
) => {
  let textToWrite: string = JSON.stringify(dataArray);

  const fileBuffer = Buffer.from(textToWrite, "utf-8");

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  myReadableStreamBuffer.put(fileBuffer);
  myReadableStreamBuffer.stop();
  res.attachment(`${filename}.json`);
  myReadableStreamBuffer.pipe(res);
};

export default jsonGenerator;
