import React from 'react';
import { Auth, Quote } from '../components/index';

function Signup() {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <Auth type='signup' />
        </div>
        <div className='hidden lg:block'>
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default Signup;
