import './App.css';
import Landing from './Landing';
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
