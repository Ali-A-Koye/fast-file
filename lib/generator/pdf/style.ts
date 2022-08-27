import { StyleDictionary  } from "pdfmake/interfaces";

const styles:StyleDictionary =  {
  // defaultStyle: {
    imgStyle: {
      alignment: "center",
    },
    dateStyle: {
      bold: true,
      alignment: "right",
      color: "black",
    },
    titleStyle: {
      bold: true,
      alignment: "left",
      color: "black",
    },
    header: {
      fontSize: 11,
      bold: true,
      // center: true,
      alignment: "center",
      margin: [0, 0, 0, 0],
    },
    subheader: {
      fontSize: 11,
      bold: true,
      alignment: "center",
      margin: [0, 10, 0, 5],
    },
    tableExample: {
      alignment: "center",
      margin: [0, 5, 0, 15],
    },
    tableHeader: {
      bold: true,
      fontSize: 11,
      alignment: "center",
      color: "black",
    },
  };
// };

export default styles;