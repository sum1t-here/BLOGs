import React from 'react';
import { BlogCards } from '../components/BlogCards';

function Blogs() {
  return (
    <div className='flex justify-center items-center flex-col'>
      <BlogCards
        authorName='sumit'
        publishedDate='2nd feb 2024'
        title='title'
        content='hvdafjhgjadbgjsdbvhgvbchgjasvbckuywedrgcfwuyijkDFgrjfdcwvfyutwevauyrfdvgsatuy'
      />
      <BlogCards
        authorName='sumit'
        publishedDate='2nd feb 2024'
        title='title'
        content='hvdafjhgjadbgjsdbvhgvbchgjasvbckuywedrgcfwuyijkDFgrjfdcwvfyutwevauyrfdvgsatuy'
      />
    </div>
  );
}

export default Blogs;
