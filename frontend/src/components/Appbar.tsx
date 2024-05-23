import { Avatar } from './BlogCards';
import { Link } from 'react-router-dom';

export const Appbar = ({ name }: { name: string }) => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
      <Link to={'/blogs'}>
        <div className='flex flex-col justify-center'>Medium</div>
      </Link>
      <div>
        <Link to={'/publish'}>
          <button
            type='button'
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            New
          </button>
        </Link>
        <Avatar name={name} />
      </div>
    </div>
  );
};
