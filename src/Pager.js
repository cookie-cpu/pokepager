import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function Pager() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=15";
  const [pokemon, setPokemon] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(baseURL);
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    let cancel
   
    axios.get(currentPageURL, {cancelToken: new axios.CancelToken(c=>{cancel = c})})
    .then(res => {
      setLoading(false)
      setNextPageURL(res.data.next)
      setPrevPageURL(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      console.log(res.data);
    })

    //cleanup function
    return () => cancel();

  },[currentPageURL])

  function gotoNextPage(){
    setCurrentPageURL(nextPageURL)
  }

  function gotoPrevPage(){
    setCurrentPageURL(prevPageURL)
  }

  if (loading) return "Loading"

  return (
    <>
      <PokemonList pokemon={pokemon}/>
        <Pagination 
          gotoNextPage={nextPageURL ? gotoNextPage : null}
          gotoPrevPage={prevPageURL ? gotoPrevPage : null}
        />
    </>
  );
}

export default Pager;
