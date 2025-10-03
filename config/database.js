module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT", "mysql");
  console.log("Trying to connect to DB:", {
    host: env("DATABASE_HOST"),
    port: env.int("DATABASE_PORT"),
    database: env("DATABASE_NAME"),
    user: env("DATABASE_USERNAME"),
  });

  return {
    connection: {
      client,
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
