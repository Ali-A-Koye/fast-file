import { Parser } from "json2csv";
import _ from "lodash";
import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const csvGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `csv_${new Date().getTime()}`
) => {
  const fields = _.map(columns, (value) => value.header);
  const opts = { fields };

  const parser = new Parser(opts);
  const csv = parser.parse(dataArray);
  const fileBuffer = Buffer.from(csv, "utf-8");

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  myReadableStreamBuffer.put(fileBuffer);
  myReadableStreamBuffer.stop();
  res.attachment(`${filename}.csv`);
  myReadableStreamBuffer.pipe(res);
};

export default csvGenerator;
