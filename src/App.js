import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Faq from "./components/Faq";
// import Cetegory from "./components/Category";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
