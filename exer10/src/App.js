import "./App.css";
import ChuckJoke from "./components/ChuckJoke";
import React, { useState, useEffect } from "react";
function App() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchJokeHandler = async () => {
    try {
      setLoading(true);
      //await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong..");
      }

      const data = await response.json();
      console.log(data);
      console.log(data.value);
      // en tiedä miksei data muunnu, eikä tulostu
      setJoke(data);
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
    content = <ChuckJoke joke={joke} />;
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
