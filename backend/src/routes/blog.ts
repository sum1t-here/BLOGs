import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBloginput, updateBloginput } from '@sum1t/medium';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// this middleware run first then it reaches the other routes of the blog
blogRouter.use('/*', async (c, next) => {
  // get the header
  // verify the header
  // if the header is correct, we can proceed
  // if not we return a 403 status code

  const header = c.req.header('authorization') || '';

  const user = await verify(header, c.env.JWT_SECRET);
  if (user) {
    // c doesn't have userId, so add a var above
    c.set('userId', user.id);
    await next();
  } else {
    c.status(403);
    return c.json({ error: 'unauthorized' });
  }
});

blogRouter.post('/', async (c) => {
  const body = await c.req.json();
  const { success } = createBloginput.safeParse(body);
  const userId = c.get('userId');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!success) {
    c.status(411);
    return c.json({
      message: 'Input not correct',
    });
  }

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(userId),
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.put('/', async (c) => {
  const body = await c.req.json();
  const { success } = updateBloginput.safeParse(body);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  if (!success) {
    c.status(411);
    return c.json({
      message: 'Input not correct',
    });
  }

  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    id: blog.id,
  });
});

// todo: add pagination
blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: { name: true },
      },
    },
  });

  return c.json({
    blogs,
  });
});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: 'Error while fetching blog post',
    });
  }
});
