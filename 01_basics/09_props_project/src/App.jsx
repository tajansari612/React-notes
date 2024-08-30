import MovieCard from "../components/MovieCard"
import movieSeries from "../public/movie_series.json"

function App() {
  // console.log(movieSeries[0])
  return (
    <div className="flex flex-row flex-wrap mx-6">
      {
        movieSeries.map((currMovie) => {
          return (
            <MovieCard key={currMovie.id} prop={currMovie} />
          )
        })        
      }    
      {/* <MovieCard /> */}
    </div>
  )
}

export default App
