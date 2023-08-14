/*
- We must clean up to given data before we can use it:
    The band countries are wrong: all the bands should have 'Canada' as the country.
    The band name should have all words capitalized.
    Remove all dots from the band names.

- Write a function that can process the input band Array and return an Array that
  contains the fixed information

- Abstraction:
  - Modify each object to have country as Canada(map)
  - Modify each object to have band name capitalized (map)
  - Modify each object to have dots removed (map)
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map((band) => {
    band['country'] = 'Canada';
    band['name'] = capitalizeBand(band['name']);
    band['name'] = noDotsBand(band['name']);
    return band;
  });
}

function capitalizeBand(band) {
  return band.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function noDotsBand(band) {
  return band.replace('.', '');
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]