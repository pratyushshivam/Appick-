import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// import './imports/css/main.css'
import './imports/css/responsive.css'
import './App.css';
import Welcome from './Welcome'
import Login from './Login'
import Registration from './Registration'

function App() {
  return (

    <Router>
      <Switch>
          <Route path="/about">
            <h1>This is the about page</h1>
          </Route>
         <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>




          <Route path="/">
          
            <h1>Home Page</h1>
          </Route>
        </Switch>
      
    </Router>


  );
}

export default App;
