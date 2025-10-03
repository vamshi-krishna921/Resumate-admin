module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: parseInt(env("PORT", 1337), 10),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
