
export default function MovieCard(currMovie) {
    // console.log("taj",currMovie)
    // console.log("ayaj",data)

    //const data = currMovie.prop
    const {name, rating, description, img_url, watch_url, genre} = currMovie.prop   //object destructuring
    return (
        <>
            <div className="mt-4 mr-4 max-w-96">
                <img src={img_url} alt={name} width="100%" height="100%" />
                <h2 className="name"><strong>Name:</strong> {name}</h2>
                <h3 className="rating"><strong>Rating:</strong> {rating}</h3>
                <p className="description"><strong>Description:</strong> {description}</p>
                <p className="genre"><strong>Genre:</strong> {genre}</p>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="rounded-md bg-red-500 px-3 py-2 mt-3 mb-8 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Watch Now
                    </button>
                </a>
            </div>
        </>

    )
}
