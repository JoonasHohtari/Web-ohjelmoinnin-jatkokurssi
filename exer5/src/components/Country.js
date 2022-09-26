import "./Country.css";
//components are functions
const Country = (props) => {
  return (
    <div className="country">
      <p className="country__name">{props.countryData.name}</p>
      <p className="country__capital">{props.countryData.capital}</p>
    </div>
  );
};

//export the component in the end
export default Country;
