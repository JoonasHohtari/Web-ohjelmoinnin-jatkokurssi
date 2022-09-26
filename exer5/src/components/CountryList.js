import Country from "./Country";
import "./CountryList.css";

const CountryList = (props) => {
  return (
    <div className="countrylist">
      <h1>{props.regionName}</h1>
      <Movie movieData={props.movies[0]} />
      <Movie movieData={props.movies[1]} />
      <Movie movieData={props.movies[2]} />
    </div>
  );
};

export default GenreList;
