import { BlogCards, Appbar } from '../components';
import { useBlogs, useBlog } from '../hooks';

function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return 'loading...';
  }
  return (
    <div>
      <Appbar name={'' || 'Anonymous'} />
      <div className='flex justify-center items-center flex-col'>
        {blogs.map((blog) => (
          <BlogCards
            id={blog.id}
            authorName={blog.author.name || 'Anonymous'}
            title={blog.title}
            content={blog.content}
            publishedDate={'2 feb'}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
