import JokeList from "./components/JokeList";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchJokeHandler = async () => {
    try {
      setLoading(true);
      //await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) {
        throw new Error("Something went wrong..");
      }

      const data = await response.json();
      // en tiedä miksei data muunnu, eikä tulostu
      const transformedJoke = data.data.map((jokeData) => {
        console.log("transformed");
        return {
          value: jokeData.data.value,
          date: jokeData.data.created_at,
          url: jokeData.data.url,
        };
      });
      setJoke(transformedJoke);
      console.log(transformedJoke);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
    // käytetään dataa
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchJokeHandler();
  }, []);

  let content;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    console.log("Lataa");
    content = <p>Loading...</p>;
  } else {
    content = <JokeList joke={joke} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchJokeHandler}>Fetch Joke</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
