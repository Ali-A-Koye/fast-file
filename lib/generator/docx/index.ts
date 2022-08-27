import { Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx";
import _ from "lodash";
import DataType from "../../../types/data";
import { Response } from "express";
import { ColsGenerated } from "../../../types/ColsGenerated";

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
      })
  );

  const rows = _.map(dataArray, (el) => {
    let arr: any[] = [];
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

  const b64string = await Packer.toBase64String(doc);

  res.setHeader("Content-Disposition", `attachment; filename=${filename}.docx`);
  res.send(Buffer.from(b64string, "base64"));
};

export default docxGenerator;
