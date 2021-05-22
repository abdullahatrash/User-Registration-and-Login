import React, { useEffect, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import {useDispatch, useSelector} from "react-redux"
import { userActions } from '../redux/actions/auth.action';
import { Link, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
});
const [submitted, setSubmitted] = useState(false);
const { username, password } = inputs;
const loggingIn = useSelector(state => state.auth.loggingIn);

const location = useLocation();
  const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
     dispatch(userActions.logout()); 
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
   
}

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
        // get return url from location state or default to home page
        const { from } = location.state || { from: { pathname: "/" } };
        dispatch(userActions.login(username, password, from));
    }
}
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST"  onClick={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user-name" className="sr-only">
                User name
              </label>
              <input
                value={username}
                onChange={handleChange}
                id="user-name"
                name="username"
                type="text"
                autoComplete="text"
                required
                className={'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              + (submitted && !username ? ' bg-gray-100 invalid:bg-red-200' : '')
              }
                placeholder="User name"
              />
               {submitted && !username &&
                <div className="invalid-feedback">Username is required</div>
               }
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              value={password}
              onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' 
                + (submitted && !password ? ' bg-gray-100 invalid:bg-red-200' : '')
                }
                placeholder="Password"
              />
              {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
           
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {loggingIn && <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>}
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default LoginPage
