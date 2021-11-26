import { useEffect, useState } from "react";
import PokemonList from "./routes/pokemonList/pokemonList";
import PokemonDetails from "./routes/pokemonDetails/details";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Error } from "./components/errorPage/error";
import useFetch from "./Hooks/useFetch";
const App = () => {
  const [offset, setOffset] = useState(0); // limit to 25 in one page
  const [search, setSearch] = useState(""); //  input value
  const [filter, setfilter] = useState([]); // search option autosuggest
  const [recent, setRecent] = useState([]); // recent visited pokemon
  const [select, setSelect] = useState([]); // select option All or recent
  const [modifiedPokemon, setModifiedPokemon] = useState([]); // modified pokemon based on select menu
  const {pokemons, error, loading} = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`)
 


  
  // set pokemon based on select
  useEffect(() => {
    if (select === "recentView") {
      const recentViewPokemon = pokemons.filter((pokemon) =>
        recent.includes(pokemon.name)
      );
      setModifiedPokemon(recentViewPokemon);
    } else {
      setModifiedPokemon(pokemons);
    }
  }, [select, pokemons, recent]); // eddited recent



  // search suggestion
  useEffect(() => {
    let arr = [];
    modifiedPokemon.forEach((pokemon) => {
      let val = pokemon.name;
      if (search.toLowerCase() === val.substr(0, search.length).toLowerCase())
        arr.push(val);
    });
    setfilter(arr);
  }, [search, modifiedPokemon]);



  // increase pokemon size
  const loadPokemon = () => {
    setOffset((offset) => offset + 25);
  };



  // set search value
  const handleChange = (e) => {
    setSearch(e.target.value);
  };



  // set select value
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };



  // set recent visited pokemon
  const clickPokemon = (e) => {
    const val = e.target.alt || e.target.innerText;
    if (recent.length < 5) {
      if (!recent.includes(val)) {
        setRecent((recent) => [...recent, val]);
      }
    } else {
      if (!recent.includes(val)) {
        setRecent((recent) => [...recent.slice(1), val]);
      }
    }
  };



  // filter pokemon with search value
  const fileteredPokemons = modifiedPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
          <Routes>
            <Route
              path="/"
              element={
                <PokemonList
                  pokemons={fileteredPokemons}
                  clickPokemon={clickPokemon}
                  loading={loading}
                  handleChange={handleChange}
                  handleSelect={handleSelect}
                  name={filter.sort()}
                  search={search}
                  loadPokemon={loadPokemon}
                />
              }
            />
            <Route path="/:pokemon" element={<PokemonDetails />} />
          </Routes>
      )}
    </>
  );
};
export default App;
