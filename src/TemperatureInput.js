import React, { Component } from "react";
export default class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label>
          Temperature in {this.props.scale}: <br />
          <input value={this.props.temperature} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
