import React from 'react';

// Assets
import BgSlow from '../assets/homebg_slow.gif';

//Library
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { Form } from 'react-router-dom';

const Register = () => {
  return (
    <div
      className="home flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${BgSlow})`, backgroundSize: 'cover' }}
    >
      <div className="text-center">
        <div className="box flex items-center justify-center flex-col">
          <h1 className="text-6xl font-bold pb-6">
            Calculate Your Expenses and Budget!
          </h1>

          <Form method="post">
            <div className="flex">
              <input
                type="text"
                name="userName"
                placeholder="Enter your username"
                aria-label="Username"
                autoComplete="given-name"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 text-center text-2xl"
              />

              <button
                type="submit"
                className="register-btn flex items-center justify-center bg-black hover:bg-gray-300 text-white font-bold py-2 px-4 rounded ml-4"
              >
                <span className="mr-2">Start Now</span>
                <UserPlusIcon width={20} />
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;