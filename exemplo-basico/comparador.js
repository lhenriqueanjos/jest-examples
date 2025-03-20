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

function compararAltura(a, b) {
  const pokemonA = pokedex[a];
  const pokemonB = pokedex[b];

  if (pokemonA.height > pokemonB.height) {
    return a;
  }
  
  if (pokemonA.height < pokemonB.height) {
    return b;
  }
  
  return 'altura igual';
}

module.exports = {
  compararAltura
};
