//== Dependencies ==//
import React, { Component } from 'react'
import Parallax from 'parallax-js' 

//== Components ==//

class Construction extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    render (
      <ul ref={el => this.scene = el}>
        <li className="layer" dataDepth="0.00">
          <img src="layer1.png"/>
        </li>
        <li className="layer" dataDepth="0.50">
          <img src="layer2.png"/>
        </li>
        <li className="layer" dataDepth="1.00">
          <img src="layer3.png"/>
        </li>
      </ul>
    )
  }
}

export default Construction;
