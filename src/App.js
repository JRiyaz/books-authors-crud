import Navbar from "./navbar";
import Home from "./home";
// use router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Swith act as Switch statment and search for requested route and trigger particular route */}
          <Switch>
            {/* Home route */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* create route */}
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
