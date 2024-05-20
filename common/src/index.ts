import { z } from 'zod';

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBloginput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBloginput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBloginput>;
export type UpdateBlogInput = z.infer<typeof updateBloginput>;
