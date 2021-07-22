import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
          <div>
          <Navigation />
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
          </div>
    </Router>
  )
}

export default App;
