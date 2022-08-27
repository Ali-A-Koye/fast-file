/* eslint-disable new-cap */
import ExcelJS from 'exceljs';
import * as streamBuffers from "stream-buffers";

import DataType from "../../../types/data";
import { Response } from "express";
import {excelCols} from "../../../types/ColsGenerated";

const excelGenerator =  async (
  columns:excelCols,
  data:DataType,
  res:Response,
  sheetname = `excel_${new Date().getTime()}`
) => {
  const myWritableStreamBuffer = new streamBuffers.WritableStreamBuffer({
    incrementAmount: 10 * 1024,
  });
  const options = {
    stream: myWritableStreamBuffer,
    useStyles: true,
    useSharedStrings: true,
  };

  const workbook = new ExcelJS.stream.xlsx.WorkbookWriter(options);
  const worksheet = workbook.addWorksheet(sheetname);

  worksheet.columns = columns;
  for (let i = 0; i < data.length; i += 1) {
    worksheet.addRow(data[i]);
  }

  worksheet.eachRow(function (Row, rowNum) {
    Row.eachCell(function (Cell, cellNum) {
      Cell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
    if (rowNum == 1) {
      Row.font = {
        size: 15,
        bold: true,
      };
    }
  });
  workbook
    .commit()
    .then(() => {
      const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
        frequency: 10,
        chunkSize: 2048,
      });
      myReadableStreamBuffer.put(myWritableStreamBuffer.getContents() as Buffer);
      myReadableStreamBuffer.stop();
      res.attachment(`${sheetname}.xlsx`);
      myReadableStreamBuffer.pipe(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default excelGenerator;
