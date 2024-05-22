import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { SignupInput } from '@sum1t/medium';

export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: '',
    email: '',
    password: '',
  });
  return (
    <div className='flex flex-col justify-center h-screen'>
      <div className='flex justify-center'>
        <div>
          <div className='px-10'>
            <div className='text-3xl font-extrabold'>Create an account</div>
            <div className='text-slate-400'>
              {type === 'signin'
                ? 'Dont have an account?'
                : ' Already have an account?'}
              <Link
                className='pl-2 underline'
                to={type === 'signin' ? '/signup' : '/signin'}
              >
                {type === 'signin' ? 'Sign up' : 'Sign in'}
              </Link>
            </div>
          </div>
          <div>
            <LabelledInput
              label='Name'
              placeholder='John Doe'
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label='Password'
              placeholder='**********'
              type='password'
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label='Email'
              placeholder='xyz@gmail.com'
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <button
              type='button'
              className='py-2.5 px-5 me-2 text-sm font-medium text-white focus:outline-none bg-slate-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 mt-5 w-full'
            >
              {type === 'signup' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className='block mb-1 mt-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || 'text'}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        required
      />
    </div>
  );
}
