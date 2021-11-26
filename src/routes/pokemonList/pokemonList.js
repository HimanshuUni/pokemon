import Pokemon from "../../ui/pokemon/pokemon";
import "./pokemonList.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Loading } from "../../components/loading/loading";
import { PokemonNotFound } from "../../components/pokemonNotFound/pokemonNotFound";

const PokemonList = ({
  pokemons,
  clickPokemon,
  loading,
  handleChange,
  handleSelect,
  name,
  search,
  loadPokemon
}) => {
  return (
    <>
      <Header
        handleChange={handleChange}
        handleSelect={handleSelect}
        name={name}
        search={search}
      />
      {loading && pokemons.length < 1 ? (
        <Loading/>
      ) : pokemons.length ? (
        <div className="pokemon-list">
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <Pokemon
                key={index}
                clickPokemon={clickPokemon}
                pokemon={pokemon}
              />
            ))}
        </div>
      ) : (
        <PokemonNotFound/>
      )}
      <Footer loadPokemon={loadPokemon} loading={loading}/>
    </>
  );
};

export default PokemonList;
