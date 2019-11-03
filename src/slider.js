import React, { Component } from "react";
import './slider.css'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value : 10};
  }
  render() {
    return (
      <div className="slidecontainer">
        <input
          type="range"
          min="10"
          max="60"
          value={this.state.value}
          className="slider"
          id="intervalRange"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (event) => {
    this.props.handleValueChange(event);
    this.setState({value : event.target.value})
  }
}

export default Slider;
