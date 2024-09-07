import React from 'react'

export default function PokemonApp() {
  const [pokemonData, setPokemonData] = React.useState([])

  React.useEffect(() => {
    fetchUrl('https://pokeapi.co/api/v2/pokemon')
  }, [])

  const fetchUrl = (url) => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPokemonData(data)
        window.scrollTo(0, 0, { behavior: 'smooth' })
      })
  }

  return (
    <div>
      <div className="space-y-2 mb-5">
        {pokemonData?.results?.map((pokemon) => (
          <p
            key={pokemon.name}
            className="bg-white rounded p-2 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center font-medium uppercase border border-gray-100 hover:border-gray-300"
          >
            {pokemon.name}
          </p>
        ))}
      </div>

      <div className="flex gap-1">
        <button
          disabled={!pokemonData?.previous}
          onClick={() => fetchUrl(pokemonData?.previous)}
          className={`bg-blue-300 rounded p-1.5 font-medium uppercase border flex-1 ${
            !pokemonData?.previous ? 'opacity-50' : 'hover:bg-blue-400'
          }`}
        >
          Prev
        </button>
        <button
          disabled={!pokemonData?.next}
          onClick={() => fetchUrl(pokemonData?.next)}
          className={`bg-blue-300 rounded p-1.5 font-medium uppercase border flex-1 ${
            !pokemonData?.next ? 'opacity-50' : 'hover:bg-blue-400'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}
