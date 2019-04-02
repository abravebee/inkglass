//== Dependencies ==//
import React, { Component } from "react";

//== Components ==//
import Fire from "../assets/video/fire-loop.mov";
import Air from "../assets/video/air.mp4"
import Air2 from "../assets/video/air2.mp4"
import Earth from "../assets/video/earth-loop.mov"
import Water from "../assets/video/water-loop.mov";

//== Style ==//
import "./Construction.css"

class Construction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earth: false,
      water: false,
      air: false,
      fire: false
    }
  }
 
  render() {
    return (
      <div className="Construction">
        <video autoPlay muted loop id="myVideo">
          <source src={Air2}/>
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
