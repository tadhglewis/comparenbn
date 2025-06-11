import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  fetch: app.fetch,
  scheduled: async (batch, env) => {},
} satisfies ExportedHandler<Cloudflare>;
