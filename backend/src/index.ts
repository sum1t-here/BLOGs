import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(jwt);
  } catch (e) {
    c.status(403);
    return c.json({ error: 'error while signing up' });
  }
});

app.post('api/v1/signin', (c) => {
  return c.text('signin route');
});

// this middleware run first then it reaches the other routes of the blog
app.use('/api/v1/blog/*', async (c, next) => {
  // get the header
  // verify the header
  // if the header is correct, we can proceed
  // if not we return a 403 status code

  const header = c.req.header('authorization') || '';
  // Bearer token => ["Bearer", "token"]
  const token = header.split(' ')[1];
  // @ts-ignore
  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({ error: 'unauthorized' });
  }
});

app.put('/api/v1/blog', (c) => {
  return c.text('blog routes');
});

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text('blog route');
});

export default app;
