import "@/shared/database/config";
import { defineConfig } from "drizzle-kit";

const { POSTGRES_URL } = process.env;

export default defineConfig({
  dbCredentials: {
    connectionString: POSTGRES_URL as string,
  },
  driver: "pg",
  out: "./drizzle",
  schema: "./app/shared/database/schema.ts",
  strict: true,
  verbose: true,
});
