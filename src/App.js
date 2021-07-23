import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Navigation from './Navigation';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CryptoSky from './CryptoSky';

function App() {
  return (
    <Router>
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
