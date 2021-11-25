import { Link } from "react-router-dom";
import "./pokemon.css";

const Pokemons = (props) => {
  const name = props.pokemon.name;

  return (
    <div className="card" >
      <Link to={`/${name}`} style={{textDecoration: 'none'}} onClick={props.clickPokemon}>
        <img
          alt={name}
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        />
        <div className="card-title">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Pokemons;
