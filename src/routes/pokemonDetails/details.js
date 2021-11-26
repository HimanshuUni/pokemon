import { Link, useParams } from "react-router-dom";
import { Error } from "../../components/errorPage/error";
import useFetch from "../../Hooks/useFetch";
import "./details.css";

const PokemonDetails = () => {
  const { pokemon } = useParams();

  // fetching data
  const {data, error} = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return error ? (
    <Error error={error} />
  ) : (
    <div className="full_page">
      <Link to="/">
        <button className="btn detail_btn">GO BACK</button>
      </Link>
      <div className="detail_view">
        <div className="left">
          <img
            alt={pokemon}
            src={`https://img.pokemondb.net/artwork/large/${pokemon}.jpg`}
          />
        </div>

        <div className="right">
          <div className="right_body">
            <div className="title">
              <h1>
                {data.name}: #{data.id}
              </h1>
            </div>
            <div className="detail">
              <div>
                <p>Height: {data.height}</p>
                <p>Weight: {data.weight}</p>
                <p>Base Experience : {data.base_experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
