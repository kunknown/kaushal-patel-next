import "@/lib/database/sql/config";
import { defineConfig } from "drizzle-kit";

const { POSTGRES_URL } = process.env;

export default defineConfig({
  dbCredentials: {
    connectionString: POSTGRES_URL as string,
  },
  driver: "pg",
  out: "./drizzle",
  schema: "./app/shared/database/sql/schema.ts",
  strict: true,
  verbose: true,
});
