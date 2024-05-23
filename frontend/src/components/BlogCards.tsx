import { Link } from 'react-router-dom';

interface BlogCardsProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCards = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardsProps) => {
  return (
    <div className=' border-b p-4 border-slate-300 w-11/12 cursor-pointer'>
      <Link to={`/blog/${id}`}>
        <div className='flex '>
          <Avatar name={authorName} />

          <div className='font-extralight pl-2 text-xs flex justify-center flex-col'>
            {authorName}
          </div>
          <div className='flex justify-center flex-col pl-2'>
            <Circle />
          </div>
          <div className='pl-2 font-thin text-slate-500 text-xs flex justify-center flex-col'>
            {publishedDate}
          </div>
        </div>

        <div className='text-sm font-semibold pt-2'>{title}</div>
        <div className='text-sm font-thin'>{content.slice(0, 100) + '...'}</div>
        <div className='font-thin text-xs text-slate-500 pt-2'>{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </Link>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className='relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-600 rounded-full'>
      <span className='font-medium text-gray-300 '>{name[0]}</span>
    </div>
  );
}

function Circle() {
  return <div className='h-1 w-1 rounded-full bg-slate-600 '></div>;
}
