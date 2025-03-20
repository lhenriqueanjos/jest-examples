const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function obterDadosPokemon(nome) {
  const urlPokemon = new URL(nome, baseUrl);

  const pokemonResult = await fetch(urlPokemon);
  return pokemonResult.json();
}

module.exports = {
  obterDadosPokemon,
};
