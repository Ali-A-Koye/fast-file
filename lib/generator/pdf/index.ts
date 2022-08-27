import pdfMakePrinter from "pdfmake";
import * as path from "path";
import * as streamBuffers from "stream-buffers";
import _ from "lodash";
import defaultStyle from "./style";

import DataType from "../../../types/data";
import { Response } from "express";
import ColsGenerated from "../../../types/ColsGenerated";
import { Headers, Widths, Data } from "../../../types/generator/pdf";
import { TDocumentDefinitions } from "pdfmake/interfaces";

const pdfGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `pdf_${new Date().getTime()}`
) => {
  let headers: Headers = [];
  let data: Data = [];
  let width: Widths = [];
  let config: TDocumentDefinitions = {
    content: [],
    pageOrientation: "landscape",
    styles: defaultStyle,
  };
  const fontDescriptors = {
    Roboto: {
      normal: path.join(__dirname, "/fonts/Rabar.ttf"),
      bold: path.join(__dirname, "/fonts/Roboto-Medium.ttf"),
    },
  };

  //mapping Columns And Data
  headers = _.map(columns, (el) => {
    width.push(el.width);
    return {
      text: el.header,
      style: el.style || "tableHeader",
    };
  });

  data = _.map(dataArray, (el) => {
    let arr: (string | number | boolean)[] = [];
    _.map(columns, (head) => {
      arr.push(el[head.key] || " ");
    });
    return arr;
  });
  data.unshift(headers);

  //report date and report range
  (config.content as Array<any>).push({
    columns: [
      {
        width: "*",
        text: `Date : ${
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
        }`,
        margin: [0, 30, 0, 8],
        style: "titleStyle",
      },
    ],
  });

  //Table contents
  data.length > 0 &&
    (config.content as Array<any>).push({
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: width,
        body: data,
      },
      layout: {
        hLineWidth: function (i: any, node: any) {
          return i === 0 || i === node.table.body.length ? 1.3 : 1;
        },
        vLineWidth: function (i: any, node: any) {
          return i === 0 || i === node.table.widths.length ? 1.3 : 1;
        },
        hLineColor: function (i: any, node: any) {
          return i === 0 || i === node.table.body.length ? "black" : "gray";
        },
        vLineColor: function (i: any, node: any) {
          return i === 0 || i === node.table.widths.length ? "black" : "gray";
        },
      },
    });

  //Finalize and Sending back the file
  let printer = new pdfMakePrinter(fontDescriptors);

  let doc = printer.createPdfKitDocument(config);

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  doc.on("data", function (chunk) {
    myReadableStreamBuffer.put(chunk);
  });

  doc.on("end", function () {
    myReadableStreamBuffer.stop();
    res.attachment(`${filename}.pdf`);
    myReadableStreamBuffer.pipe(res);
  });
  doc.end();
};

export default pdfGenerator;
