import "tailwindcss/tailwind.css"
import './App.css';
import HomePage from "./Pages/HomePage";
import LoginPage  from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { history } from '../src/helper/history';

import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { alertActions } from "./redux/actions/alert.actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}, [dispatch]);

  return (
    <Router>
    <div>
      <Switch>
      <Route path="/signup">
     <SignupPage/>
     </Route>
      <Route path="/login">
     <LoginPage/>
     </Route>
      <Route path="/">
     <HomePage/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
