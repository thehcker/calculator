import { Component } from "react";
import BoilingMessage from "./BoilingMessage";
import TemperatureInput from "./TemperatureInput";

const fieldName = {
  c: "Celcius",
  f: "Fahrenheight"
};
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheightChange = this.handleFahrenheightChange.bind(this);
    this.state = { scale: "c", temperature: "" };
  }
  handleCelciusChange(temperature) {
    this.setState({
      scale: "c",
      temperature
    });
  }
  handleFahrenheightChange(temperature) {
    this.setState({
      scale: "f",
      temperature
    });
  }
  toCelcius(temperature) {
    return ((temperature - 32) * 5) / 9;
  }
  toFahrenheight(temperature) {
    return (temperature * 9) / 5 + 32;
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const tempVal = convert(input);
    const rounded = Math.round(tempVal * 1000) / 1000;
    return rounded.toString();
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celcius =
      scale === "f"
        ? this.tryConvert(temperature, this.toCelcius)
        : temperature;
    const fahrenheight =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheight)
        : temperature;
    return (
      <fieldset>
        <legend>
          <h3>Dispaly temperature in {fieldName[scale]}</h3>
        </legend>
        <div>
          <TemperatureInput
            scale="c"
            temperature={celcius}
            onTemperatureChange={this.handleCelciusChange}
          />
        </div>

        <div>
          <TemperatureInput
            scale="f"
            temperature={fahrenheight}
            onTemperatureChange={this.handleFahrenheightChange}
          />
        </div>
        <BoilingMessage celcius={parseFloat(celcius)} />
      </fieldset>
    );
  }
}
