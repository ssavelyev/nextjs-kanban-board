import { betterAuth } from "better-auth";
import { pool } from "../db";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL!,
  database: pool,
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
});
