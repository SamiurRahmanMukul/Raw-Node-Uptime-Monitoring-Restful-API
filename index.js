/**
 * Title: Uptime Monitoring RESTFull API Application
 * Description: A RESTFull API to monitor up or down time of user defined links
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 1 July 2021 & 17 July 2021 (remodify)
 *
 */

// * dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
// const environment = require("./helpers/environments");
const data = require("./lib/data");

// * app object - module scaffolding
const app = {};

// * configuration
app.config = {
  port: 3000,
};

/* // * testing file-system module | data (write, read, update, delete)
// ? write data to - using fs-module
data.create(
  "test",
  "newFile",
  { name: "Bangladesh", language: "Bangla" },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// // ? read data from - using fs-module
// data.read("test", "newFile", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// // ? update data from - using fs-module
// data.update(
//   "test",
//   "newFile",
//   { name: "England", language: "English" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );

// // ? delete data from - using fs-module
// data.delete("test", "newFile", (err) => {
//   if (err) {
//     console.log(err);
//   }
// }); */

// * create server on configuration setting port
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.port, () => {
    // console.log(`environment variable is : ${process.env.NODE_ENV}`);
    console.log(`Server listening successfully on ${app.config.port} port...`);
  });

  /* // ? environment variable - (package.json settings)
    "start": "NODE_ENV=staging nodemon index.js",
    "production": "NODE_ENV=production nodemon index.js",
  
  // ? server port listen function prot set
  server.listen(environment.port, () => {
    console.log(`Server listening successfully on ${environment.port} port...`);
  }); */
};

// * handle Request Response
app.handleReqRes = handleReqRes;

// * start the server
app.createServer();
