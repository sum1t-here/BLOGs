import { useParams } from 'react-router-dom';
import { useBlog } from '../hooks';
import { Blogoutline } from '../components';

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || '' });
  if (loading) {
    return 'loading...';
  }
  if (!blog) {
    return <div>No blog available</div>;
  }
  console.log(`${blog} is blog`);
  return (
    <div>
      <Blogoutline blog={blog} />
    </div>
  );
}

export default Blog;
