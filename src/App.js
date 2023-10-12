import Movie from './components/movie';
import {movies} from './movieDummy';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return(
              <Movie
              title = {item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
