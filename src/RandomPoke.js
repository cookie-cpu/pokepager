import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';
import debounce from "lodash/debounce";

export default function RandomPoke() {

    // const num = Math.floor(Math.random() * 905)
    const [query, setQuery] = useState(1)
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
          // console.log(baseURL);
          // console.log(`ID:${res.data.id}, ${res.data.name.toUpperCase()}`);
        })
    
      },[baseURL])

     

  if (loading) return <h1>LOADING</h1>

  return (
      <>

        <form>
          {/* <label>Pick a pokemon between 1 and 905 </label> */}
          <input className='idrange' onDoubleClick={e=>setQuery(e.target.value)}/>

        </form>
         
         <PokemonCard pokemon={pokemon}/>
         
      </>
  )
}
