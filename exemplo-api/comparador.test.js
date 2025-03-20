const { compararAltura } = require('./comparador');

describe('Comparador de Pokémon', () => {
  it('a é maior que b', async () => {
    const a = 'pikachu';
    const b = 'eevee';
    const resultadoEsperado = 'pikachu é maior que eevee';

    const resultadoObtido = await compararAltura(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  it('a é menor que b', async () => {
    const a = 'eevee';
    const b = 'pikachu';
    const resultadoEsperado = 'eevee é menor que pikachu';

    const resultadoObtido = await compararAltura(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});
