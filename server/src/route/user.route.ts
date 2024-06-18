import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@danishhansari/blog-common";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.json({ hi: "Hello from user route" });
});

app.post("/signup", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Input not correct" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //  zod
  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json(token);
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.json({ error });
  }
});

app.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json("Invalid Input");
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findUnique({
      where: { username: body.username, password: body.password },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json(token);
  } catch (error) {
    c.status(403);
    return c.json({ error });
  }
});

export default app;
