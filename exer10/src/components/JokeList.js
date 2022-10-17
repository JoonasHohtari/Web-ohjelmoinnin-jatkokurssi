import ChuckJoke from "./ChuckJoke";
import "./Jokes.css";

const JokeList = (props) => {
  return (
    <ul className="joke-list">
      {props.joke.map((joke) => (
        <ChuckJoke value={joke.value} date={joke.date} url={joke.url} />
      ))}
    </ul>
  );
};

export default JokeList;
