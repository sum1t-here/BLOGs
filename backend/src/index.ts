import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono();

app.post('/api/v1/signup', (c) => {
  return c.text('signup route');
});

app.post('api/v1/signin', (c) => {
  return c.text('signin route');
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
