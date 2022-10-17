import "./Country.css";
//components are functions
const Country = (props) => {
  return (
    <div className="country">
      <h3 className="country__name">{props.countryData.name}</h3>
      <p className="country__capital">Capital: {props.countryData.capital}</p>
    </div>
  );
};

//export the component in the end
export default Country;
