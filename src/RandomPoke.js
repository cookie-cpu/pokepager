import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default function RandomPoke() {

    const num = Math.floor(Math.random() * 905)
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${num}`;
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        axios.get(baseURL)
        .then(res => {
          setLoading(false)
          console.log(res.data);
          setPokemon(res.data)
        })
    
      },[])


  if (loading) return "Loading"

  return (
      <>
         <PokemonCard pokemon={pokemon}/>
      </>
  )
}
