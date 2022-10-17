import "./Jokes.css";

const ChuckJoke = (props) => {
  return (
    <li className="joke">
      <p>{props.date}</p>
      <h2>{props.value}</h2>
      <p>{props.url}</p>
    </li>
  );
};

export default ChuckJoke;
