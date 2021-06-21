/**
 * Title: Utilities
 * Description: Important utility functions
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 20 July 2021
 *
 */

// * module scaffolding
const crypto = require("crypto");

const utilities = {};
// const environments = require("./environments");

// * parse JSON string to Object
utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

// * hash string
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    const hash = crypto
      // .createHmac("sha256", environments.secretKey) // ? get secretKey from environment variable
      .createHmac("sha256", "hsjdhsdhsjdhjshdjshd") // ? set secretKey manually
      .update(str)
      .digest("hex");
    return hash;
  }
  return false;
};

// * export module
module.exports = utilities;
