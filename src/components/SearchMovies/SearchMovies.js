import React, { useState } from "react";
import Card from "../Card/Card";
import "./SearchMovies.css";

const SearchMovies = () => {
  //

  //states - input, movies
  const [query, setQuery] = useState("");
  //movie state
  const [movies, setMovies] = useState([]);

  const JP = "Jurassic Park";

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const sM = async (e) => {
    e.preventDefault();

    // const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=811ab1027c846d98178d63e9b11dcbd4&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data.results ==> ", data.results);
      if (data.results === undefined) {
        return setQuery(JP);
        // return <h4>Happy</h4>;
      }
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={sM}>
        <label /* htmlFor="query" */ className="label">Movie Name</label>
        <input
          type="text"
          //   name="query"
          placeholder="i.e. Jurassic Park"
          className="input"
          value={query}
          //   onChange={(e) => setQuery(e.target.value)}
          onChange={handleInput}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
};

export default SearchMovies;
