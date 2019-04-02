//== Dependencies ==//
import React, { Component } from "react";

//== Components ==//
import Fire from "../assets/video/fire-loop.mov";
import Air from "../assets/video/air.mp4"
import Air2 from "../assets/video/air2.mp4"
import Earth from "../assets/video/earth-loop.mov"
import Water from "../assets/video/water-loop.mov";
import FireIcon from "../assets/svg-icons/fire-2.svg"
import AirIcon from "../assets/svg-icons/wind.svg"
import EarthIcon from "../assets/svg-icons/leaf-2.svg"
import WaterIcon from "../assets/svg-icons/water-2.svg"

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
          <source src={Earth}/>
        </video>

        <div className="content">
        <div className="text glass">
          <h1 className="header">Inkglass</h1>
          <p className="paragraph">Coming Soon</p>
          </div>
          <div className="elements">
            <img className="element-icon fire" src={FireIcon} />
            <img className="element-icon" src={AirIcon} />
            <img className="element-icon" src={WaterIcon} />
            <img className="element-icon" src={EarthIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Construction;
