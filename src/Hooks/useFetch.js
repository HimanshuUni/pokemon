import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = (url) => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if(data.results) {setPokemons((pokemons) => [...pokemons, ...data.results]); }
          else {setData(data); }
          setError("");
        })
        .catch(() => {
          setError("404 Not Found");
        })
        .finally(() => {
          setLoading(false);
        });
    };
    load(url);
  }, [url]);
  return {pokemons, error, loading, data};
};

export default useFetch;