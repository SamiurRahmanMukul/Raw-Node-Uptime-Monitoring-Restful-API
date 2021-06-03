/**
 * Title: Not Found Handler
 * Description: 404 - Not Found Handler
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 1 July 2021
 *
 */

// * module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found",
  });
};

module.exports = handler;
