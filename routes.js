/**
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021
 *
 */

// * dependencies
const { sampleHandler } = require("./handlers/route_handlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
