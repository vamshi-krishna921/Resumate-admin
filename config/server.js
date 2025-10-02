module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"), // Required by Render
  port: Number(process.env.PORT) || 1337, // Use Render's injected PORT
  app: {
    keys: env.array("APP_KEYS"), // Strapi app keys
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
