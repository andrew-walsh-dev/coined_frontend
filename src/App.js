import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import UserProfile from './UserProfile'
import CoinView from './CoinView';
import API_BASE_URL from './env';
import $ from 'jquery';
import { useState, useEffect } from 'react';
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

  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let localStorage = window.localStorage;
    let sessionStorage = window.sessionStorage;
    let storageUser = JSON.parse(localStorage.getItem('userInfo'));

    if (storageUser == null) {
      storageUser = JSON.parse(sessionStorage.getItem('userInfo'));
      if (storageUser == null) {
        setReady(true);
        return null;
      }
    }
    $.ajax({
      type: 'POST',
      url: API_BASE_URL + '/auth',
      data: {
        'username': storageUser.username,
        'password': storageUser.password
      }
    })
      .then((res) => {
        if (res.success) {
          setUser(storageUser);
          setReady(true);
        }
        return null;
      })
  }, [])

  if (ready) {
    return (
      <>
        <Router>
          <ReactNotification />
          <Navigation user={user} setUser={setUser} />
          <CryptoSky />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" >
                {user == null && <Landing setUser={setUser} />}
                {user != null && <Home />}
              </Route>
              <Route path='/login'>
                <Login setUser={setUser} user={user}/>
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/profile'>
                {user == null && <Login />}
                {user != null && <UserProfile user={user}/>}
              </Route>
              <Route path='/coin/:coinName'>
                <CoinView />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </>
    )
  }
  return <div></div>
}

// function checkRememberMe() {
//   // let localStorage = window.localStorage;
//   // let sessionStorage = window.sessionStorage;
//   // let user = JSON.parse(localStorage.getItem('userInfo'));

//   // if (user == null) {
//   //   user = JSON.parse(sessionStorage.getItem('userInfo'));
//   //   console.log(user);
//   //   if (user == null) {
//   //     return null;
//   //   }
//   // }

//   // $.ajax({
//   //   type: 'POST',
//   //   url: API_BASE_URL + '/auth',
//   //   data: {
//   //     'username': user.username,
//   //     'password': user.password
//   //   }
//   // })
//   //   .then((res) => {
//   //     if (res.success) {
//   //       return user;
//   //     }
//   //     return null;
//   //   })
// }

export default App;
