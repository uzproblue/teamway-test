import Home from "./Screens/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Test from "./Screens/Test";
import Result from "./Screens/Result";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
