import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value : 1};
  }
  render() {
    return (
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="10"
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
