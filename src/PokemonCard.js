import React from 'react'

export default function PokemonCard({ pokemon }) {

  let length = pokemon.moves.length;
  const randomInts = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (


    <div className='pokecard'>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <div className='image-div'>
        <img className='sprite' src={pokemon.sprites.back_default}></img>
        <img className="artwork" src={pokemon.sprites.other["official-artwork"].front_default}></img>
        <img className='sprite' src={pokemon.sprites.front_default}></img>
      </div>

      <p>{pokemon.height}", <br />{pokemon.weight} LBs</p>
      <p>{pokemon.moves[0].move.name.toUpperCase()}</p>
      {/* {pokemon.game_indices[2] && <p>Debut Game: {pokemon.game_indices[0].version.name}</p>} */}

      {/* {pokemon.moves.length > 1 && <><p>5 Random Moves</p><ul>
        <li>{pokemon.moves[randomInts(length, 1)].move.name}</li>
        <li>{pokemon.moves[randomInts(length, 1)].move.name}</li>
        <li>{pokemon.moves[randomInts(length, 1)].move.name}</li>
        <li>{pokemon.moves[randomInts(length, 1)].move.name}</li>
        <li>{pokemon.moves[randomInts(length, 1)].move.name}</li>
      </ul></>} */}
    </div>
  )
}
