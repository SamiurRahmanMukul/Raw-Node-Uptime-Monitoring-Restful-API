/**
 * Title: Uptime Monitoring RESTFull API Application
 * Description: A RESTFull API to monitor up or down time of user defined links
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 1 July 2021
 *
 */

// * dependency
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environments = require("./helpers/environments");

// * app object / module scaffolding
const app = {};

// * app configuration
app.config = {
  port: 3000,
};

// * handle Request / Responses
app.handleReqRes = handleReqRes;

// * create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  // server listening
  server.listen(app.config.port, () => {
    /* // environment variable
    console.log(`environment variable is ${process.env.NODE_ENV}`); */

    console.log(`Server listening successfully on ${app.config.port} port...`);
  });
};

// * start the server
app.createServer();
