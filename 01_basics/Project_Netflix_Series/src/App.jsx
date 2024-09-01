import MovieCard from "../components/MovieCard"
import movieSeries from "../public/movie_series.json"

function App() {
  // console.log(movieSeries[0])
  return (
    <div id="constainer" className="px-48 py-8 font-poppins">
      <h2 className="my-4 text-2xl font-semibold">List of Netflix Series</h2>
      <div className="grid grid-cols-3 gap-8">
        {
          movieSeries.map((currMovie) => {
            return (
              <MovieCard key={currMovie.id} prop={currMovie} />
            )
          })        
        }    
      </div>
    </div>
      
  )
}

export default App
