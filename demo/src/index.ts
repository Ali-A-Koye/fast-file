import express, { Express, Request, Response } from "express";

import fastgen from "../../dist/lib";
const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the server!");
});

app.get("/pdf", (req: Request, res: Response) => {
  let data = [
    { name: "john", age: 12 },
    { name: "john", age: 12 },
  ];
  fastgen(data, "pdf", res);
});

app.get("/docx", (req: Request, res: Response) => {
  let data = [
    { name: "john", age: 12 },
    { name: "john", age: 12 },
  ];
  fastgen(data, "docx", res);
});

app.get("/excel", (req: Request, res: Response) => {
  let data = [
    { name: "john", age: 12 },
    { name: "john", age: 12 },
  ];
  fastgen(data, "excel", res);
});

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default server;