// Dependencies
// =============================================================
require('dotenv').config();

// Variables
// =============================================================
const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const S3_ID = process.env.S3_ID;
const S3_SECRET = process.env.S3_SECRET;
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

// Fallback
// =============================================================
if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable",
  );
}

if (!domain) {
  throw new Error(
    ".env is missing the definition of an AUTH0_DOMAIN environmental variable",
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of a APP_ORIGIN environmental variable",
  );
}

const clientOrigins = ["http://localhost:4040"];

// Exports
// =============================================================
module.exports = {
  audience,
  domain,
  clientOriginUrl,
  clientOrigins,
  S3_ID, 
  S3_SECRET, 
  S3_BUCKET_NAME,
};