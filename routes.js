/**
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021 & 17 July 2021 (remodify)
 *
 */

// * dependencies
const { sampleHandler } = require("./handlers/route_handlers/sampleHandler");
const { userHandler } = require("./handlers/route_handlers/userHandler");
const { tokenHandler } = require("./handlers/route_handlers/tokenHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
  token: tokenHandler,
};

module.exports = routes;
