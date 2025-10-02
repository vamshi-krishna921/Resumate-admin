module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: process.env.PORT || 1337, // Use Render's port directly
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
