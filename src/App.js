import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Sheldon from "./pages/sheldon/Single";
import Leonard from "./pages/sheldon/Leonard";
import Raj from "./pages/sheldon/Raj";
import Howard from "./pages/sheldon/Howard";
import Penny from "./pages/sheldon/Penny";
import Amy from "./pages/sheldon/Amy";
import Bernadette from "./pages/sheldon/Bernadette";
import Merch from "./pages/merch/Single"

function App() {
    const currentUser = true;

    return (
      <Router>
          <Topbar />
          <Switch>
              <Route exact path="/">
                  <Homepage />
              </Route>
              <Route path="/single/sheldon">
                  <Sheldon />
              </Route>
              <Route path="/single/raj">
                  <Raj />
              </Route>
              <Route path="/single/howard">
                  <Howard />
              </Route>
              <Route path="/single/penny">
                  <Penny />
              </Route>
              <Route path="/single/leonard">
                  <Leonard />
              </Route>
              <Route path="/single/amy">
                  <Amy />
              </Route>
              <Route path="/single/bernadette">
                  <Bernadette />
              </Route>
              <Route path="/merch">
                  <Merch />
              </Route>
              {/*{currentUser ? <Homepage /> : <Register />}*/}
              <Route path="/register">
                  <Register/>
              </Route>
              {/*{currentUser ? <Homepage /> : <Login />}*/}
              <Route path="/login"><Login/></Route>
              <Route path="/post/:id">
                  <Single />
              </Route>
              <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
              <Route path="/settings">
                  {currentUser ? <Settings /> : <Login />}
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
