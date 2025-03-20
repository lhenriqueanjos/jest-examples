jest.mock('./acesso-api');

const { compararAltura } = require('./comparador');
const { obterDadosPokemon } = require('./acesso-api');

obterDadosPokemon.mockImplementation((nome) => {
  const pikachu = {
    height: 4,
    stats: [
      {
        base_stat: 35,
        stat: {
          name: 'hp'
        },
      }
    ],
  };
  
  const eevee = {
    height: 3,
    stats: [
      {
        base_stat: 55,
        stat: {
          name: 'hp'
        },
      }
    ],
  };
  
  const pokedex = {
    eevee,
    pikachu,
  };
  
  return Promise.resolve(pokedex[nome]);
});

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
