import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("Hello there");
});
app.post("/api/v1/signin", (c) => {});
app.post("/api/v1/blog", (c) => {});
app.put("/api/v1/blog", (c) => {});
app.get("/api/v1/blog/:id", (c) => {});

export default app;
