import "tailwindcss/tailwind.css"
import './App.css';
import HomePage from "./Pages/HomePage";



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
      <Route path="/">
     <HomePage/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
