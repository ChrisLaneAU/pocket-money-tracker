const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
module.exports = withTypescript(withSass());
module.exports.target = "serverless";
