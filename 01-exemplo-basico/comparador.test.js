const { compararAltura } = require('./comparador');

describe('Comparador de Pokémon', () => {
  it('a é maior que b', () => {
    const a = 'pikachu';
    const b = 'eevee';
    const resultadoEsperado = 'pikachu';

    const resultadoObtido = compararAltura(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  it('a é menor que b', () => {
    const a = 'pikachu';
    const b = 'eevee';
    const resultadoEsperado = 'eevee';

    const resultadoObtido = compararAltura(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});
