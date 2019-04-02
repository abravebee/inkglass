//== Dependencies ==//
import React, { Component } from "react";

//== Components ==//
import Contact from "./Contact.js";
import Fire from "../assets/video/fire-loop.mov";
import Air from "../assets/video/air2.mp4"
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
      fire: false,
      air: false,
      water: true,
      earth: false
    }
  }

  fire = () => {
    console.log("FIRE CLICK")
    this.setState({fire: true, air: false, water: false, earth: false}, () => {console.log("fire state", this.state)})
  }

  air = () => {
    console.log("AIR CLICK")
    this.setState({fire: false, air: true, water: false, earth: false}, () => {console.log("air state", this.state)})
  }

  water = () => {
    console.log("WATER CLICK")
    this.setState({fire: false, air: false, water: true, earth: false}, () => {console.log("water state", this.state)})
  }
  
  earth = () => {
    console.log("EARTH CLICK")
    this.setState({fire: false, air: false, water: false, earth: true}, () => {console.log("earth state", this.state)})
  }
 
  render() {
    console.log("render state", this.state)
    let backgroundSrc = (this.state.fire ? Fire 
      : this.state.air ? Air
      : this.state.water ? Water 
      : Earth)

    let glassTone = (this.state.fire ? 'fireglass' 
      : this.state.air ? 'airglass'
      : this.state.water ? 'waterglass' 
      : 'earthglass')
      console.log("bg", backgroundSrc)
    return (
      <div className="Construction">
        <video autoPlay muted loop id="myVideo" src={backgroundSrc}>
          {/* <source /> */}
        </video>
        <div className="glass-container">
        <div className={`glass ${glassTone}`}>
        </div>
        </div>

        <div className="content">
        <div className="text">
          <h1 className="header">Inkglass</h1>
          <p className="paragraph">Coming Soon</p>
          </div>
          <div className="elements">
            <img 
              className={`element-icon fire ${this.state.fire?'active':''}`}
              src={FireIcon} 
              onClick={() => {this.fire()}}
              alt="A fire icon that changes the background to a candle when clicked" />
            <img 
              className={`element-icon air ${this.state.air?'active':''}`}
              src={AirIcon}  
              onClick={() => {this.air()}}
              alt="An air icon that changes the background to smoke when clicked" />
            <img 
              className={`element-icon water ${this.state.water?'active':''}`} 
              src={WaterIcon}  
              onClick={() => {this.water()}}
              alt="A water icon that changes the background to the ocean when clicked" />
            <img 
              className={`element-icon earth ${this.state.earth?'active':''}`} 
              src={EarthIcon}  
              onClick={() => {this.earth()}}
              alt="A leaf icon that changes the background to a forest when clicked" />
          </div>
          <div className="copy">
            <p>Inkglass aims to bring 21st century analytics to Old World and New Age spirituality.</p> 
            <p>Want to contribute? Drop me a line!</p>
            <Contact />
        </div>
      </div>
      </div>
    );
  }
}

export default Construction;
