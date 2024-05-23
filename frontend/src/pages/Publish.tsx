import axios from 'axios';
import { Appbar } from '../components';
import { BACKEND_URL } from '../constants/constant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Publish() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <Appbar name={'Anonynmous'} />
      <div className='flex justify-center items-center w-full flex-col'>
        <div className='max-w-screen-lg w-full pt-3'>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='max-w-screen-lg w-full pt-5'>
          <textarea
            className=' h-80 text-gray-800 bg-white border-0 w-full'
            placeholder='Write an article...'
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          onClick={async () => {
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content: description,
              },
              {
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
              }
            );
            navigate(`/blog/${response.data.id}`);
          }}
          type='submit'
          className=' px-3 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'
        >
          Publish post
        </button>
      </div>
    </div>
  );
}

export default Publish;
