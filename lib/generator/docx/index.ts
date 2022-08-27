import { Document, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, WidthType } from "docx";
import _ from "lodash";
import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";
import * as streamBuffers from "stream-buffers";

const docxGenerator = async (
  columns: ColsGenerated,
  dataArray: DataType,
  res: Response,
  filename = `docx_${new Date().getTime()}`
) => {
  const headers = columns.map(
    (el) =>
      new TableCell({
        children: [new Paragraph(el.header)],
        verticalAlign: VerticalAlign.CENTER,
      })
  );

  const rows = _.map(dataArray, (el) => {
    let arr: TableCell[] = [];
    _.map(columns, (head) => {
      arr.push(
        new TableCell({
          children: [new Paragraph(el[head.key].toString())],
        })
      );
    });

    return new TableRow({
      children: arr,
    });
  });
  const table = new Table({
    rows: [
      new TableRow({
        children: headers,
      }),
      ...rows,
    ],
  });

  const doc = new Document({
    sections: [
      {
        children: [table],
      },
    ],
  });

  const fileBuffer = await Packer.toBuffer(doc);

  const myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
    frequency: 10,
    chunkSize: 2048,
  });

  myReadableStreamBuffer.put(fileBuffer);
  myReadableStreamBuffer.stop();
  res.attachment(`${filename}.docx`);
  myReadableStreamBuffer.pipe(res);
};

export default docxGenerator;
