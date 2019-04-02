//== Dependencies ==//
import React, { Component } from "react";
import { Route, withRouter} from "react-router-dom";

//== Components ==//
import Landing from "./components/landingPage/Landing";
import Callback from './Callback';
import Construction from './components/Construction';

//== Styles ==//
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path="/" component={Construction}></Route>
      <Route path="/landing" component={Landing}></Route>
      <Route exact path='/callback' component={Callback} />
      ?????????????????????
        {
          //Landing Page or Main App
        }
      </div>
    );
  }
}

export default withRouter(App);
