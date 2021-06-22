/**
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021
 *
 */

// * dependencies
const { sampleHandler } = require("./handlers/route_handlers/sampleHandler");
const { userHandler } = require("./handlers/route_handlers/userHandler");
const { tokenHandler } = require("./handlers/route_handlers/tokenHandler");
const { checkHandler } = require("./handlers/route_handlers/checkHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
  token: tokenHandler,
  check: checkHandler,
};

module.exports = routes;
