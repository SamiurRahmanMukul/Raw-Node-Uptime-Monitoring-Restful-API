/**
 * Title: Handle Request / Response
 * Description: Handling Request and Response
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021
 *
 */

// * dependence
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("./../routes");
const {
  notFoundHandler,
} = require("./../handlers/route_handlers/notFoundHandler");

// * module scaffolding
const handler = {};

// * handle Request / Responses
handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  /* handling routes - start */
  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    queryStringObject,
    headersObject,
  };

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;
  /* handling routes - end */

  /* body post data find with enconding format - start */
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });

    // response handle
    res.end("Hello World!");
  });
  /* body post data find enconding format - end */
};

module.exports = handler;
