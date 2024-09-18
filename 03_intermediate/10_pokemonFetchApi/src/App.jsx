import { useState, useEffect } from "react"

function App() {
  const [pokemon, setPokemon] = useState(null)

  const api = "https://pokeapi.co/api/v2/pokemon/squirtle"

  const fetchPokemon = () => {
    fetch(api)
      .then((res) => (
        res.json()
      ))
      .then((data) => (
        setPokemon(data)
      ))
      .catch((error) => (console.log(error)
      ))
  }
  useEffect(() => {
    fetchPokemon()
  }, [])

  console.log(pokemon);


  if (!pokemon) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <section className='flex flex-col items-center h-screen w-screen bg-gray-100 text-green-600 text-left'>
      <header>
        <h1 className='text-3xl font-bold my-6'>Lets catch Pokemon!</h1>
      </header>

      <ul id="card-demo">
        <li id="pokemon-card">
          <figure>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </figure>
          <h1>{pokemon.name}</h1>
        </li>
      </ul>
    </section>
  )
}

export default App
