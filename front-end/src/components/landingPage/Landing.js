//== Dependencies ==//
import React, { Component } from "react";

//== Components ==//
import LandingNav from "./LandingNav";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
       <LandingNav />
        {
          //LandingNav
          //Call to Action
          //Features
          //LandingFooter
        }
      </div>
    );
  }
}

export default Landing;
