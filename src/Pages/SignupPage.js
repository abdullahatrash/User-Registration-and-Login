import React, {useEffect, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/actions/auth.action';
import { Link } from 'react-router-dom';

const SignupPage = () => {

const [user, setUser] = useState({
   
    username: '',
    password: '',
    firstName:"",
    lastName: ""
});


const { username, password, firstName, lastName } = user;

const [submitted, setSubmitted] = useState(false);

const registering = useSelector(state => state.register.registration);

// reset login status
  useEffect(() => {
      dispatch(userActions.logout());
  },);

const dispatch = useDispatch();

function handleChange(e) {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
 
}


  function handleSubmit(e)  {
    e.preventDefault();
      setSubmitted(true);
        if (firstName && lastName && username && password) {
            dispatch(userActions.register(user));
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up and create account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
            <Link to ="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login if you already have an account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true"/>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pt-1 mt-1">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                      </label>
                      <input
                        value={firstName}
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        id="first-name"
                        autoComplete="text"
                        className={'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                        +(submitted && !firstName ? ' is-invalid' : '') }
                      />
                      {
                       submitted && !firstName &&
                       <div className="invalid-feedback">First Name is required</div>
                      }
                    
            </div>
            <div className="pt-1 mt-1">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        value={lastName}
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        id="last-name"
                        autoComplete="text"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
            </div>
            <div className="pt-1 mt-1">
            <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                        User name
                      </label>
                      <input
                        value={username}
                        onChange={handleChange}
                        type="text"
                        name="username"
                        id="user-name"
                        autoComplete="user-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
            </div>
            <div className="pt-1 mt-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

              
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
  
            <div className="text-sm">
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Cancel
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
              {registering && <span><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg></span>}
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
       
    )
}

export default SignupPage
