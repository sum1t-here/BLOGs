import { Blog } from '../hooks';
import { Appbar } from './Appbar';
import { Avatar } from './BlogCards';

export const Blogoutline = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar name={blog.author.name || 'Anonymous'} />
      <div className='flex justify-center'>
        <div className='grid grid-cols-12 px-10 pt-200 w-full pt-12'>
          <div className='col-span-8'>
            <div className='text-5xl font-extrabold'>{blog.title}</div>
            <div className='text-gray-500 mt-1'>Post on 2nd Feb</div>
            <div className='pt-4'>{blog.content}</div>
          </div>
          <div className='col-span-4'>
            Author
            <div className='flex gap-3 flex-row item-center'>
              <div>
                <Avatar name={blog.author.name || 'Anonymous'} />
              </div>
              <div className='text-xl font-bold'>
                {blog.author.name || 'Anonymous'}
              </div>
            </div>
            <div>
              Random catchphrases about the author's ability to grab user's
              attention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
