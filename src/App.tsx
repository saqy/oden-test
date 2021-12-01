
import './App.css';
import { Welcome } from './components/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GraphPresenter } from './components/GraphPresenter/GraphPresenter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/graph">
            <GraphPresenter />
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;
