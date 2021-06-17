/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 1 July 2021 & 17 July 2021 (remodify)
 *
 */

// * module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
