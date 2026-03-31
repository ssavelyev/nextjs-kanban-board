import { betterAuth } from "better-auth";
import { pool } from "../db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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

export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if (result.success) {
    redirect("/sign-in");
  }
}
