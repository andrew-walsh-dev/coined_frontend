import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import API_BASE_URL from './env';
import $ from 'jquery';
import { useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CryptoSky from './CryptoSky';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Suspense } from 'react';

function App() {

  const [user, setUser] = useState(checkRememberMe());

  return (
    <>
      <Router>
        <ReactNotification />
        <Navigation user={user} setUser={setUser} />
        <CryptoSky />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" >
              <Landing setUser={setUser} />
            </Route>
            <Route path='/login'>
              <Login setUser={setUser} />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

function checkRememberMe() {
  let localStorage = window.localStorage;
  let user = JSON.parse(localStorage.getItem('userInfo'));

  if (user == null) {
    return null;
  }

  $.ajax({
    type: 'POST',
    url: API_BASE_URL + '/auth',
    data: {
      'username': user.username,
      'password': user.password
    }
  })
    .then((res) => {
      if (res.success) {
        return user;
      }
      return null;
    })
}

export default App;
