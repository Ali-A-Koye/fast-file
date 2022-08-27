import _ from "lodash";
import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const txtGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `txt_${new Date().getTime()}`
) => {
  

  const fileBuffer = Buffer.from("", "utf-8");

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
