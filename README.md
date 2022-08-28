## Fast File Converter

#### _The Express.js's Fast File Converter Library_

![download-image](https://animated-gif-creator.com/images/01/12-css-download-buttons_20.gif)

[![Ali-A-Koye - fast-file ](https://img.shields.io/static/v1?label=Ali-A-Koye&message=fast-file&color=yellow&logo=github)](https://github.com/Ali-A-Koye/fast-file) [![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/Ali-A-Koye/fast-file/blob/master/LICENSE)

Fast File Converter Library is a quick and easy-to-use library to convert data sources to a variety of options. Fast File tries to make the developer's life easier by simplifying many conversion options (PDF, JSON, CSV, imSQL, text, excel, and Docx) with a single data source format.

## Making the developer's life easier

Our idea for this package is to provide the basic needs of a developer when dealing with files simply.  
When you only have a result of a query ( Array of Objects ) and you want to convert it to a form that a non-programmer can read and understand more easily, that's how our package helps you to convert your data into a variety of data representation forms just by calling one function.  
 

## Key Features

*   Easy to use.
*   Sending the response back to the client and completes the request-response cycle by itself
*   Files that have been generated will be sent back to the client as a stream, ensuring that a large amount of data can be transferred easily.
*   Option to rename the Headers for the data representation in table form.
*   Supports  PDF, JSON, CSV, imSQL, text, excel, and Docx.
*   Package built with Typescript, you will get the Typescript benefits of validation of your data if you already use Typescript. 

## Table of Contents

*   [_**Demo**_](#demo)
*   [_**Requirements**_](#requirements)
*   [_**Usage**_](#usage)
    *   [_**PDF**_](#PDF)
    *   [_**Docx**_](#DocX)
    *   [_**Excel / XLSX**_](#Excel)
    *   [_**CSV**_](#CSV)
    *   [_**Text**_](#Text) 
    *   [_**imSql ( insert Many SQL )**_](#imSql )
    *   [**JSON**](#JSON)
*   [_**API**_](#api)
*   [_**Author**_](#authors-&&-Contributors)
*   [_**License**_](#license)

## Demo

This is a simple [_**Demo**_](https://github.com/Ali-A-Koye/fast-file/tree/master/demo) environment for the package where you can use and test the package , clone it and it's simple express.js with TS application that is integrated with this package.  
  
Work with the Demo instruction :

```plaintext
npm install  // Installing dependencies
npm run build  // To build the TS into JS code
npm run start // To start the express.js server
```

## Requirements

In order to work with this package, you are required to :

*   install node.js and npm
*   install expres.js as your project must be express.js

## Installation

To use the package you must first add the it to your dependencies in your project.

```plaintext
$ npm i fast-file-converter
```

Then you have to register the package in your project.

### Typescript

```javascript
import fastFile from "fast-file-converter";
```

### Javascript

```javascript
const fastFile = require("fast-file-converter").default;
```

## Usage

With our aim for simplicity of this package, the integration part is the easiest and we will demonstrate it below.  
 

### PDF 

You can convert your array of an object into a nice, pre-styled table and have it downloaded right away, as simple as this : 

```javascript
app.get("/pdf", (req, res) => {
  let data = [
    { name: "Ali", age: 23},
    { name: "Alison", age: 20 },
  ];
  fastFile(data, "pdf", res); //This will end the request as well.
});
```

### DocX

You can convert your array of an object into a pre-configured table and have it downloaded right away, the benefit of this is that you can style it the way you want after downloading the docx.

```javascript
app.get("/docx", (req, res) => {
  let data = [
    { name: "Ali", age: 23},
    { name: "Alison", age: 20 },
  ];
  fastFile(data, "docx", res);  //This will end the request as well.
});
```

### Excel / XLSX

You can convert your array of an object into a nice, pre-styled Excel file and have it downloaded right away, as simple as this :   
 

```javascript
app.get("/excel", (req, res) => {
  let data = [
    { name: "Ali", age: 23},
    { name: "Alison", age: 20 },
  ];
  fastFile(data, "excel", res); //This will end the request as well.
});
```

### CSV

You can convert your array of an object into a CSV file and have it downloaded right away, as simple as this :   
 

```javascript

app.get("/csv", (req, res) => {
  let data = [
    { name: "Ali", age: 23},
    { name: "Alison", age: 20 }, 
  ];
  fastFile(data, "csv", res); //This will end the request as well.
});
```

### Text 

You can convert your array of an object into a readable .txt file and have it downloaded right away, as simple as this : 

```javascript

app.get("/txt", (req, res) => {
  let data = [
      { name: "Ali", age: 23},
      { name: "Alison", age: 20 }, 
  ];
  fastFile(data, "txt", res); //This will end the request as well.
});
```

### imSql ( insert Many SQL ) 

You can convert your array of an object into an insert many format of SQL file and have it downloaded right away, as simple as this :   
 

```javascript
app.get("/imSql", (req, res) => {
  let data = [
      { name: "Ali", age: 23},
      { name: "Alison", age: 20 }, 
  ];
  fastFile(data, "imSql", res); //This will end the request as well.
});
```

### JSON

You can convert your array of an object into an JSON format and have it downloaded right away, as simple as this : 

```javascript

app.get("/json", (req: Request, res: Response) => {
  let data = [
      { name: "Ali", age: 23},
      { name: "Alison", age: 20 }, 
  ];
  fastFile(data, "json", res); //This will end the request as well.
});
```

## AsOp (As Operation) Configuration :

AsOp is an array of objects, for which columns you want to have which field in your data, and which header for it. that means you can easily control the flow of your data by specifying a friendly name as a header and specifying the corresponding field with it.  
 

```javascript
app.get("/pdf", (req, res) => {
  let data = [
    { name: "Ali", age: 23},
    { name: "Alison", age: 20 },
  ];
  
 let asOp = [
   {
       field:"name" //field which points to a field in data array of object
       as:"Full Name of Employees"  //as is column header
   }
 ];
 
  fastFile(data, "pdf", res , asOp); //This will end the request as well.
});
```

With above example, you will get a table which has "Full Name of Employee" as header and the whole column is filled with names  
 

## API

Below is a table of acceptable parameters for this library.

| Parameter | Description | Default | Validations |
| --- | --- | --- | --- |
| data | Array of Objects |   | Required |
| Type | must be valid Enum ("pdf" | "excel" | "docx" | "csv" | "txt" | "imSql" | “json” )  |   | Required |
| response | Express.js's Response Object |   | Required |
| AsOp | As Operation is an Array of Objects | \[\] |   |

## Author

[Ali Amjed](https://github.com/Ali-A-Koye)

## License

[The MIT License](http://opensource.org/licenses/MIT)