/**
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021
 *
 */

// * module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

// * determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// * exports corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// * exports module
module.exports = environmentToExport;
