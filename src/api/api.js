const api_url = "https://pokeapi.co/api/v2/pokemon";

export async function getDetails(pokemon) {
  const response = await fetch(`${api_url}/${pokemon}`);
  const data = await response.json();
  return data;
}

export async function fetchPokemon(offset) {
  const response = await fetch(`${api_url}?offset=${offset}&limit=25`);
  const data = await response.json();
  return data;
}
