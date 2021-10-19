import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Classification from "./Classification";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/classification">
          <Classification />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
