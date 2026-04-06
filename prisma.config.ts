export default {
  schema: "./prisma/schema.prisma",
  out: "./prisma/migrations",
  driver: "pg",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
