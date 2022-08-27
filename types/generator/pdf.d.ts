type Headers = {
  text: string;
  style: string;
}[];

type Widths = (string | number)[];

type Data = ((string | number | boolean)[] | Headers)[];

export { Headers, Widths, Data };
