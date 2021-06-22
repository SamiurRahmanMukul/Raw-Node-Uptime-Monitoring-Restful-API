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

/* // ? twilio sms api using send message
const { sendTwilioSms } = require("./helpers/notifications");
sendTwilioSms("01611111111", "Hello World", (err) => {
  console.log(`this is the error: `, err);
}); */

// * app object - module scaffolding
const app = {};

// * configuration
app.config = {
  port: 3000,
};

// * create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`server listening to port ${app.config.port}...`);
  });
};

// * handle Request Response
app.handleReqRes = handleReqRes;

// * start the server
app.createServer();
