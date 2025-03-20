const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function obterDadosPokemon(nome) {
  const urlPokemonA = new URL(nome, baseUrl);

  const pokemonAResult = await fetch(urlPokemonA);
  return pokemonAResult.json();
}

module.exports = {
  obterDadosPokemon,
};
