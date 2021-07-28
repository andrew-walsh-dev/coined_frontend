import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CryptoSky from './CryptoSky';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Router>
      <ReactNotification />
      <Navigation />
      <Switch>
        <Route path="/">
          <CryptoSky />
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
