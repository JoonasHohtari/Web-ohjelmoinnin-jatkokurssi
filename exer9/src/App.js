import MoviesList from "./components/MoviesList";
import "./App.css";
import React, { useState, useEffect } from "react";
// Completed
const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    try {
      setLoading(true);
      //await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong..");
      }

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
    // käytetään dataa
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchMoviesHandler();
  }, []);

  let content;

  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    console.log("Lataa");
    content = <p>Loading...</p>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
