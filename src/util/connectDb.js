import { Client } from "cassandra-driver";

export async function connect() {
  const client = new Client({
    cloud: {
      secureConnectBundle: process.env.SECURE_CONNECT_PATH,
    },
    credentials: {
      username: process.env.CLIENT_ID,
      password: process.env.CLIENT_SECRET,
    },
  });
  await client.connect();
  return client;
}
