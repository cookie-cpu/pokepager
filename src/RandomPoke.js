import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default function RandomPoke() {

    const num = Math.floor(Math.random() * 905)
    const [query, setQuery] = useState("bulbasaur")
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${query}`;
    

    useEffect(()=>{
        setLoading(true)
        axios.get(baseURL)
        .then(res => {
          setLoading(false)
          // console.log(res.data);
          // console.log("render!!!");
          setPokemon(res.data)
          console.log(baseURL);
        })
    
      },[baseURL])

     

  if (loading) return "Loading"
// setQuery(event.target.value)
  return (
    
      <>
        <form>
          <label>Pick a pokemon between 1 and 905 </label>
          <input className='idrange' type="range" min="1" max="904" placeholder="Enter Poke ID"  onMouseUp={event => {setQuery(event.target.value)}}/>
          
        </form>
         
         <PokemonCard pokemon={pokemon}/>
      </>
  )
}
