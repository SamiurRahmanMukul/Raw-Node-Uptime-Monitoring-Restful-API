/**
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Md. Samiur Rahman (Mukul)
 * Date: 3 July 2021 & 17 July 2021 (remodify)
 *
 */

// * module scaffolding
const environments = {};

// * staging environment
environments.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "hsjdhsdhsjdhjshdjshd",
  maxChecks: 5,
  twilio: {
    fromPhone: "",
    accountSid: "",
    authToken: "",
  },
};

// * production environment
environments.production = {
  port: 5000,
  envName: "production",
  secretKey: "djkdjskdjksdjksjdskjd",
  maxChecks: 5,
  twilio: {
    fromPhone: "",
    accountSid: "",
    authToken: "",
  },
};

// * determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

// * export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

// * export module
module.exports = environmentToExport;
