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

app.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  const user = await verify(header, c.env.JWT_SECRET);
  try {
    c.set("jwtPayload", user.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }
});

app.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId,
    },
  });
  return c.json({ id: blog.id });
});

app.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({ id: blog.id });
});

app.get("/get/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });
    return c.json({ blog });
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.json({ error: "Error while fetch blog" });
  }
});

// pagination will add
app.get("/blogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.blog.findMany({});
    return c.json({ blogs });
  } catch (err) {
    console.log(err);
    c.status(404);
    return c.json({ message: "Error while fetching blogs" });
  }
});

export default app;
