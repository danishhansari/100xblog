import { Hono } from "hono";
import userRoute from "./route/user.route";
import blogRoute from "./route/blog.route";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);

export default app;
