import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Router-2/" exact component={Home}></Route>
          <Route path="/Router-2/details/:id" component={Details}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
