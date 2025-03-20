const { obterDadosPokemon } = require('./acesso-api');

async function compararAltura(a, b) {
  const pokemonA = await obterDadosPokemon(a);

  const pokemonB = await obterDadosPokemon(b);

  if (pokemonA.height > pokemonB.height) {
    return `${a} é maior que ${b}`;
  }

  if (pokemonA.height < pokemonB.height) {
    return `${a} é menor que ${b}`;
  }

  return 'a altura é igual';
}

module.exports = {
  compararAltura
};
