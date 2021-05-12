import "tailwindcss/tailwind.css"
import './App.css';
import HomePage from "./Pages/HomePage";
import LoginPage  from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
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
