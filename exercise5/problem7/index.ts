async function fetchPokemon(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }

  const pokemon = await response.json();
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
  };
}

async function fetchPokemons(names) {
  try {
    const promises = names.map(async (name) => {
      return await fetchPokemon(name);
    });

    const pokemonData = await Promise.all(promises);
    return pokemonData;
  } catch (err) {
    throw new Error("Something went wrong");
  }
}

export default fetchPokemons;
