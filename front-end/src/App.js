//== Dependencies ==//
import React, { Component } from "react";
import { Route, withRouter} from "react-router-dom";

//== Components ==//
import Landing from "./components/landingPage/Landing";

//== Styles ==//
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      Under construction.
      <Route path="/"
        component={Landing}></Route>
        {
          //Landing Page or Main App
        }
      </div>
    );
  }
}

export default withRouter(App);
