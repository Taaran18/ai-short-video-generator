/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-short-video-generator_owner:s12aKDhtZkgw@ep-shrill-haze-a5hma1a0.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
  },
};
