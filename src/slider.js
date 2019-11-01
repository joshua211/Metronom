import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { value : 50};
  }
  render() {
    return (
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={this.state.value}
          class="slider"
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
