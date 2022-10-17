import Country from "./Country";
import "./CountryList.css";

const CountryList = (props) => {
  return (
    <div className="countrylist">
      <h1>{props.regionName}</h1>
      <Country countryData={props.countries[0]} />
      <Country countryData={props.countries[1]} />
      <Country countryData={props.countries[2]} />
    </div>
  );
};

export default CountryList;
