import "./Jokes.css";

const ChuckJoke = (props) => {
  return (
    <div className="joke">
      <p>{props.joke.created_at}</p>
      <h2>{props.joke.value}</h2>
      <p>{props.joke.url}</p>
    </div>
  );
};

export default ChuckJoke;
