import "./css/main.css";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App">
              <Header links={ [
                  {url: "/home", text: "Home"},
                  {url: "/about", text: "About"}
              ]}/>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
