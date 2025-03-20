const { formatarMovimentos } = require('./movimentos');

describe('Formatador de movimentos de Pokémon', () => {
  it('monta corretamente a frase', async () => {
    const resultadoObtido = await formatarMovimentos('pikachu');

    expect(resultadoObtido).toMatchSnapshot();
  });
});
