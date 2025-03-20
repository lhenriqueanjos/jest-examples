const { obterDadosPokemon } = require('./acesso-api');

async function formatarMovimentos(nomePokemon) {
  const pokemon = await obterDadosPokemon(nomePokemon);

  return pokemon.moves
    .reduce(
      (stringConcatenada, { move }, indice) => {
        if (indice === 0) {
          return `${stringConcatenada}${move.name}`;
        }

        return `${stringConcatenada}, ${move.name}`;
      },
      `Os movimentos de ${nomePokemon} são: `
    );
}

module.exports = {
  formatarMovimentos
};
