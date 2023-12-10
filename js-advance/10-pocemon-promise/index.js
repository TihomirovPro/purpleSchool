'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/dito')
  .then(res => res.json())
  .then(data => fetch(data.abilities[0].ability.url))
  .then(res => res.json())
  .then(data => {
    for (const el of data.effect_entries) {
      if (el.language.name === 'en') console.log(el.effect);
    }
  })
  .catch(error => console.log(error))
