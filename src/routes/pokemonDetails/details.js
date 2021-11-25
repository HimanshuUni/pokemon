import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetails } from "../../api/api";
import { Error } from "../../components/errorPage/error";
import "./details.css";

const PokemonDetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { pokemon } = useParams();

  useEffect(() => {
    getDetails(pokemon)
      .then((d) => setData(d))
      .catch(() => {
        setError("404 Not Found");
      });
  }, [pokemon]);


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
