//== Dependencies ==//
import React, { Component } from "react";
import Parallax from "parallax-js";

//== Components ==//
import Fire from "../assets/video/fire-loop.mp4";

class Construction extends Component {
  render() {
    return (
      <div className="Construction">
        <video autoplay muted loop id="myVideo">
          <source src={Fire} type="video/mp4" />
        </video>

        <div className="content">
          <h1>Inkglass</h1>
          <p>Coming Soon</p>
        </div>
      </div>
    );
  }
}

export default Construction;
