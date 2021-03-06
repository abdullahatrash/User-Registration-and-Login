import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/actions/auth.action';

const HomePage = () => {

  
  const user = useSelector(state => state.auth.user);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
}, [dispatch]);

function handleDeleteUser(id) {
  dispatch(userActions.delete(id));
}


    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" className="h-7 sm:h-8" alt="logo" />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>React + Redux - User Registration and Login Tutorial & Example</p>
                  <h1 className="pt-0 text-xl  ">Hii {user.firstName}!</h1>
                  <h2 className="pt-0 text-xl">You're logged in with React!!</h2>
                  <h3>All registered users:</h3>
                  {users.loading && <em>Loading users...</em>}
                  {users.error && <span className="text-red-600">ERROR: {users.error}</span>}
                  <ul className="list-disc space-y-2">
                      {
                          users.items?.map((user, index) =>
                          <li className="flex items-start" key={user.id}>
                          <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <p className="ml-2">
                          {user.firstName + ' ' + user.lastName}
                            <code className="text-sm font-bold text-gray-900">{' '}Apllication users</code>{' '} 
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a href onClick={() => handleDeleteUser(user.id)} className="text-blue-500">Delete</a></span>
                            }
                          </p>
                        </li>
                          )
                      }
                  </ul>
                  
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Do you want to logout :( ?</p>
                  <p>
                      <Link to="/login">
                    <span className="text-cyan-600 hover:text-cyan-700"> Logout &rarr; </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomePage
