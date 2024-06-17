import z from "zod";

export const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type UpdateBlogType = z.infer<typeof updateBlogInput>;
export type CreateBlogType = z.infer<typeof createBlogInput>;
export type SigninInput = z.infer<typeof signinSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
