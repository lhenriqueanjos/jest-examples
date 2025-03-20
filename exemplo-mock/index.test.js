const { somaLimite } = require('./index');

jest.mock('./limite', () => ({
  LIMITE: 10
}));


describe('soma limite', () => {
  it('soma valores abaixo do limite', () => {
    const a = 6;
    const b = 3;
    const resultadoEsperado = 9;

    const resultadoObtido = somaLimite(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  it('soma valores no limite', () => {
    const a = 3;
    const b = 7;
    const resultadoEsperado = 10;

    const resultadoObtido = somaLimite(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  it('soma valores acima do limite', () => {
    const a = 3;
    const b = 8;
    const resultadoEsperado = 'Limite excedido';

    const resultadoObtido = somaLimite(a, b);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});


