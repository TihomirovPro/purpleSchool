'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  const url = data.abilities[0].ability.url;

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText).effect_entries;

    for (const el of data) {
      if (el.language.name === 'en') console.log(el.effect);
    }
  })

})
