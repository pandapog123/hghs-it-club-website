import { Client } from "pg";
import { z } from "zod";

function getClient() {
  if (process.env.NODE_ENV == "development") {
    const client = new Client({
      database: "local-hghs-web-db",
    });

    return client;
  } else {
    // todo: create live postgres db
    const client = new Client({
      database: "*live db name*",
    });

    return client;
  }
}

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function createUser(formData: FormData) {}

export async function createSession(formData: FormData) {}

export async function getUser(token: string) {}
