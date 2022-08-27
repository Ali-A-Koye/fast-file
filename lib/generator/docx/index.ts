
import {Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx";

import DataType from "../../../types/data";
import { Response } from "express";
import {ColsGenerated} from "../../../types/ColsGenerated";

const docxGenerator = async (
    columns: ColsGenerated,
    dataArray: DataType,
    res: Response,
    filename = `docx_${new Date().getTime()}`
  ) => {

    const table = new Table({
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("name")],
                    }),
                    new TableCell({
                        children: [new Paragraph("age")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("ali")],
                    }),
                    new TableCell({
                        children: [new Paragraph("12")],
                    }),
                ],
            }),
        ],
    });
    
    const doc = new Document({
        sections: [{
            children: [table],
        }],
    });

    const b64string = await Packer.toBase64String(doc);
    
    res.setHeader('Content-Disposition', `attachment; filename=${filename}.docx`);
    res.send(Buffer.from(b64string, 'base64'));
  }

  export default docxGenerator;