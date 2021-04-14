import "./App.css";
import SearchMovies from "./components/SearchMovies/SearchMovies";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
