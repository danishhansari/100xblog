import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  const response = await verify(header, c.env.JWT_SECRET);
  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

app.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: body.authorId,
    },
  });
});

app.put("/", (c) => {});

app.get("/:id", (c) => {
  return c.text("Hello from Hono");
});

export default app;
