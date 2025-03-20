const { LIMITE } = require('./limite');

function somaLimite(a, b) {
  const resultado = a + b;

  if (resultado > LIMITE) {
    return 'Limite excedido';
  }

  return resultado;
}

module.exports = {
  somaLimite
};
