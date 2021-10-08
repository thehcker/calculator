export default function BoilingMessage(props) {
  return props.celcius >= 100 ? "Water Will Boil" : "Water Will Not Boil";
}
