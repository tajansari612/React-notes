
export default function MovieCard(currMovie) {
    // console.log("taj",currMovie)
    // console.log("ayaj",data)

    //const data = currMovie.prop
    const {name, rating, description, img_url, watch_url, cast, genre} = currMovie.prop   //object destructuring
    let genreArray = new Array(genre.length);
    let i;
    for(i=0;i<(genre.length-1);i++){
        genreArray.push(genre[i]+", ")
    }
    genreArray.push(genre[i])


    let castArray = new Array(cast.length);
    for(i=0;i<(cast.length-1);i++){
        castArray.push(cast[i]+", ")
    }
    castArray.push(cast[i])


    const bgColor = rating >= 8.5 ? "bg-yellow-300" : "bg-green-300"

    return (
        <>
            <div className="font-poppins shadow-lg rounded-sm leading-5 ">
                <img src={img_url} className="rounded-sm" alt={name} width="100%" height="100%" />
                <h2 className="name text-xl font-semibold mt-8 ml-3 mr-4">Name: {name}</h2>
                <h3 className="rating text-sm mt-2 ml-3 mr-4 font-semibold ">Rating: <span className={`${bgColor} rounded-lg px-2`}>{rating}</span></h3>
                <p className="description mt-2 ml-3 mr-4 text-sm">Summary: {description}</p>
                <p className="cast mt-2 ml-3 mr-4 text-sm">Cast: {castArray}</p>
                <p className="genre mt-2 ml-3 mr-4 text-sm">Genre: {genreArray}</p>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button type="button" className={`rounded-sm ml-3 mr-4 mt-4 mb-4 px-3 py-2 ${bgColor} text-sm font-semibold text-black shadow-sm hover:bg-black/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}>
                        Watch Now
                    </button>
                </a>
            </div>
        </>

    )
}
