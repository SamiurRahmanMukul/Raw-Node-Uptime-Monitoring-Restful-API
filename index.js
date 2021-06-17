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

// * app object - module scaffolding
const app = {};

// * configuration
app.config = {
  port: 3000,
};

// * create server on configuration setting port
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server listening successfully on ${app.config.port} port...`);
  });
};

// * handle Request Response
app.handleReqRes = handleReqRes;

// * start the server
app.createServer();
